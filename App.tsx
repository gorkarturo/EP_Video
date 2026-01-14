
import React, { useState, useCallback, useMemo } from 'react';
import { MediaMetadata, CompatibilityResult } from './types.ts';
import { PLATFORM_SPECS } from './constants.ts';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<MediaMetadata | null>(null);
  const [results, setResults] = useState<CompatibilityResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const checkCompatibility = useCallback((meta: MediaMetadata) => {
    const checkResults = PLATFORM_SPECS.map(spec => {
      const mismatches: string[] = [];
      
      // Dimension check
      if (meta.width !== spec.width || meta.height !== spec.height) {
        mismatches.push(`Dimensiones: se esperaba ${spec.width}x${spec.height}, detectado ${meta.width}x${meta.height}`);
      }
      
      // Format check
      const fileNameLower = meta.fileName.toLowerCase();
      const hasValidExt = spec.formats.some(ext => fileNameLower.endsWith(ext));
      if (!hasValidExt) {
        mismatches.push(`Formato: se esperaba ${spec.formats.join('/')}, extensión no válida`);
      }

      // Video specific checks
      if (meta.type === 'video') {
        if (spec.fpsAllowed && meta.fps && !spec.fpsAllowed.includes(Math.round(meta.fps))) {
          mismatches.push(`FPS: se esperaba ${spec.fpsAllowed.join('/')}, detectado ${Math.round(meta.fps)}`);
        }
        if (spec.durationSeconds && meta.duration && Math.abs(meta.duration - spec.durationSeconds) > 0.5) {
          mismatches.push(`Duración: se esperaba ${spec.durationSeconds}s, detectado ${meta.duration.toFixed(1)}s`);
        }
      }

      // Size check
      if (spec.maxSizeBytes && meta.size > spec.maxSizeBytes) {
        mismatches.push(`Peso: ${formatSize(meta.size)} supera el límite de ${formatSize(spec.maxSizeBytes)}`);
      }

      return {
        spec,
        isCompatible: mismatches.length === 0,
        mismatches
      };
    });
    setResults(checkResults);
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    setFile(selectedFile);
    setIsAnalyzing(true);
    setError(null);
    setMetadata(null);
    setResults([]);

    const fileUrl = URL.createObjectURL(selectedFile);
    const fileName = selectedFile.name.toLowerCase();
    const isVideo = fileName.endsWith('.mp4') || fileName.endsWith('.mov');
    const isImage = fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png');

    if (isVideo) {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = fileUrl;
      video.onloadedmetadata = () => {
        const meta: MediaMetadata = {
          fileName: selectedFile.name,
          type: 'video',
          width: video.videoWidth,
          height: video.videoHeight,
          duration: video.duration,
          size: selectedFile.size,
          fps: 25, // Fallback common value
          extension: selectedFile.name.split('.').pop() || '',
          colorSpace: 'RGB (Standard)'
        };
        setMetadata(meta);
        checkCompatibility(meta);
        setIsAnalyzing(false);
        URL.revokeObjectURL(fileUrl);
      };
      video.onerror = () => {
        setError("Error al cargar el video.");
        setIsAnalyzing(false);
      };
    } else if (isImage) {
      const img = new Image();
      img.src = fileUrl;
      img.onload = () => {
        const meta: MediaMetadata = {
          fileName: selectedFile.name,
          type: 'image',
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: selectedFile.size,
          extension: selectedFile.name.split('.').pop() || '',
          colorSpace: 'RGB' // Browser loads images as RGB to canvas/memory
        };
        setMetadata(meta);
        checkCompatibility(meta);
        setIsAnalyzing(false);
        URL.revokeObjectURL(fileUrl);
      };
      img.onerror = () => {
        setError("Error al cargar la imagen.");
        setIsAnalyzing(false);
      };
    } else {
      setError("Formato de archivo no soportado. Use MP4, MOV, JPG o PNG.");
      setIsAnalyzing(false);
    }
  };

  const displayResults = useMemo(() => {
    const compatible = results.filter(r => r.isCompatible);
    if (compatible.length > 0) return compatible;
    if (metadata) {
      return results.filter(r => r.spec.width === metadata.width && r.spec.height === metadata.height);
    }
    return [];
  }, [results, metadata]);

  const compatibleCount = results.filter(r => r.isCompatible).length;
  const isFallbackDisplay = compatibleCount === 0 && displayResults.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <span className="bg-indigo-600 text-white p-2 rounded-lg shadow-indigo-200 shadow-lg">
                <i className="fas fa-check-double"></i>
              </span>
              Validador de Soportes
            </h1>
            <p className="text-slate-500 mt-1">Verificación técnica de artes finales (Vídeo e Imagen RGB).</p>
          </div>
          
          <label className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95">
            <i className="fas fa-file-upload"></i>
            Subir Archivo
            <input type="file" className="hidden" accept=".mp4,.mov,.jpg,.jpeg,.png" onChange={handleFileUpload} />
          </label>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {isAnalyzing && (
          <div className="bg-white rounded-2xl p-20 border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-600 font-semibold">Analizando archivo...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3 mb-8">
            <i className="fas fa-exclamation-triangle"></i>
            {error}
          </div>
        )}

        {metadata && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 animate-in fade-in duration-500">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Info del Archivo</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400 font-bold uppercase mb-1">Tipo</div>
                    <div className="text-lg font-black text-slate-800 capitalize">{metadata.type === 'video' ? 'Vídeo' : 'Imagen'}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400 font-bold uppercase mb-1">Resolución</div>
                    <div className="text-lg font-black text-slate-800">{metadata.width} &times; {metadata.height}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400 font-bold uppercase mb-1">Espacio Color</div>
                    <div className="text-lg font-black text-slate-800">{metadata.colorSpace}</div>
                  </div>
                  {metadata.type === 'video' && (
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-1">Duración</div>
                      <div className="text-lg font-black text-slate-800">{metadata.duration?.toFixed(2)}s</div>
                    </div>
                  )}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-xs text-slate-400 font-bold uppercase mb-1">Peso</div>
                    <div className="text-lg font-black text-slate-800">{formatSize(metadata.size)}</div>
                  </div>
                </div>
                <div className={`mt-8 p-5 rounded-2xl text-center border-2 ${compatibleCount > 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>
                  <div className="text-3xl font-black">{compatibleCount}</div>
                  <div className="text-xs font-bold uppercase tracking-wide">Compatibles</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-lg font-bold text-slate-800">
                    {isFallbackDisplay ? 'Soportes que coinciden en dimensiones' : 'Resultados de Compatibilidad'}
                  </h2>
                  {isFallbackDisplay && (
                    <span className="text-xs font-bold px-2 py-1 bg-amber-100 text-amber-700 rounded-lg flex items-center gap-1">
                      <i className="fas fa-info-circle"></i> Solo coinciden dimensiones
                    </span>
                  )}
                </div>
                
                <div className="divide-y divide-slate-100">
                  {displayResults.length > 0 ? (
                    displayResults.map((result) => (
                      <div key={result.spec.id} className="p-6 hover:bg-slate-50/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-slate-900">{result.spec.soporte}</h3>
                            {result.isCompatible ? (
                              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Válido</span>
                            ) : (
                              <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Incompleto</span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 font-bold uppercase mt-1">
                            {result.spec.ciudad} - {result.spec.entorno} {result.spec.terminal ? `(${result.spec.terminal})` : ''}
                          </div>
                          <div className="text-sm text-slate-500 mt-2 flex flex-wrap gap-x-4">
                            <span>{result.spec.width}x{result.spec.height}</span>
                            {metadata.type === 'video' && (
                              <>
                                <span>{result.spec.durationSeconds}s</span>
                                <span>{result.spec.fpsAllowed?.join('/')} fps</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="md:text-right min-w-[200px]">
                          {result.isCompatible ? (
                            <div className="text-emerald-600 font-bold flex items-center md:justify-end gap-2">
                              <i className="fas fa-check-circle"></i>
                              Apto
                            </div>
                          ) : (
                            <div className="space-y-1">
                              {result.mismatches.map((m, i) => (
                                <div key={i} className="text-rose-500 text-xs font-medium flex items-center md:justify-end gap-1 text-right">
                                  <i className="fas fa-times-circle"></i>
                                  {m}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-12 text-center text-slate-500">
                      <i className="fas fa-search text-3xl mb-4 text-slate-300 block"></i>
                      No se han encontrado soportes que coincidan con este archivo.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {!metadata && !isAnalyzing && (
          <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-white text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-400">
              <i className="fas fa-photo-video text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Validar Arte Final</h3>
            <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
              Sube tu vídeo (.mp4, .mov) o imagen (.jpg, .png en RGB) para verificar la compatibilidad con el circuito nacional de soportes.
            </p>
            <label className="cursor-pointer bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-10 py-4 rounded-2xl font-black transition-all border border-indigo-100 shadow-sm active:scale-95">
              Seleccionar Archivo
              <input type="file" className="hidden" accept=".mp4,.mov,.jpg,.jpeg,.png" onChange={handleFileUpload} />
            </label>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
