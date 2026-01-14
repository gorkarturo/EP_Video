
import { MediaSpec } from './types.ts';

// Common defaults based on user requirements
const VIDEO_FORMATS = ['.mp4', '.mov'];
const IMAGE_FORMATS = ['.jpg', '.jpeg', '.png'];
const ALL_FORMATS = [...VIDEO_FORMATS, ...IMAGE_FORMATS];
const DEFAULT_FPS = [24, 25];
const DEFAULT_DURATION = 10;
const MAX_SIZE = 50 * 1024 * 1024; // 50MB default

export const PLATFORM_SPECS: MediaSpec[] = [
  { id: '1', soporte: 'A LAXE', entorno: 'Centros Comerciales', width: 962, height: 1152, ciudad: 'Pontevedra', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '2', soporte: 'ABC SERRANO 1', entorno: 'Centros Comerciales', width: 545, height: 384, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '3', soporte: 'ABC SERRANO 2', entorno: 'Centros Comerciales', width: 1280, height: 544, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '4', soporte: 'AIRESUR', entorno: 'Centros Comerciales', width: 1280, height: 768, ciudad: 'Sevilla', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '5', soporte: 'Arenas (metro)', entorno: 'Centros Comerciales', width: 1152, height: 576, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '6', soporte: 'Arenas (perimetral)', entorno: 'Centros Comerciales', width: 2304, height: 1792, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '7', soporte: 'Arenas (Gran Via)', entorno: 'Centros Comerciales', width: 1456, height: 416, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '8', soporte: 'ARENAS (SUELO)', entorno: 'Centros Comerciales', width: 1360, height: 1280, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '9', soporte: 'DIAGONAL MAR CUBO', entorno: 'Centros Comerciales', width: 1536, height: 512, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '10', soporte: 'EL SALER - LED', entorno: 'Centros Comerciales', width: 800, height: 4590, ciudad: 'Valencia', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '11', soporte: 'EQUINOCCIO MADRID', entorno: 'Centros Comerciales', width: 1280, height: 768, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '12', soporte: 'ISLAZUL', entorno: 'Centros Comerciales', width: 1352, height: 780, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '13', soporte: 'LA FINCA GRAND CAFÉ (1)', entorno: 'Centros Comerciales', width: 1170, height: 990, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '14', soporte: 'LA FINCA GRAND CAFÉ (2)', entorno: 'Centros Comerciales', width: 5120, height: 1620, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '15', soporte: "L'ILLA 1p", entorno: 'Centros Comerciales', width: 1280, height: 768, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '16', soporte: "L'ILLA 2p", entorno: 'Centros Comerciales', width: 896, height: 512, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '17', soporte: 'MORALEJA GREEN NORTE', entorno: 'Centros Comerciales', width: 1280, height: 768, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '18', soporte: 'PARQUE ALMENARA', entorno: 'Centros Comerciales', width: 1280, height: 720, ciudad: 'Murcia', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '19', soporte: 'SAMBIL', entorno: 'Centros Comerciales', width: 1260, height: 360, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '20', soporte: 'VIALIA MÁLAGA (ATRIO)', entorno: 'Centros Comerciales', width: 7936, height: 512, ciudad: 'Málaga', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '21', soporte: 'VIALIA MÁLAGA (LOBBY)', entorno: 'Centros Comerciales', width: 1920, height: 1408, ciudad: 'Málaga', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '22', soporte: 'VILAMARINA', entorno: 'Centros Comerciales', width: 1920, height: 1080, ciudad: 'Barcelona', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '23', soporte: 'ZIELO DE POZUELO LED', entorno: 'Centros Comerciales', width: 1368, height: 216, ciudad: 'Madrid', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '24', soporte: 'Hola BCN norte', entorno: 'aeropuerto', width: 2592, height: 648, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '25', soporte: 'Hola BCN sur', entorno: 'aeropuerto', width: 2808, height: 648, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '26', soporte: 'cubos', entorno: 'aeropuerto', width: 3456, height: 1728, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '27', soporte: 'espada', entorno: 'aeropuerto', width: 2880, height: 900, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '28', soporte: 'Led bajada taxis', entorno: 'aeropuerto', width: 810, height: 630, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '29', soporte: 'LED - Entrecintas', entorno: 'aeropuerto', width: 3840, height: 2160, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '30', soporte: 'LED - Sky Center', entorno: 'aeropuerto', width: 2880, height: 540, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '31', soporte: 'LED - Recogida equipajes', entorno: 'aeropuerto', width: 900, height: 540, ciudad: 'Barcelona', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '32', soporte: 'Mupi Digital 4K', entorno: 'aeropuerto', width: 2160, height: 3840, ciudad: 'Barcelona', terminal: 'T1 - T2', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '33', soporte: 'Mupi Digital HD', entorno: 'aeropuerto', width: 1080, height: 1920, ciudad: 'Barcelona', terminal: 'T1 - T2', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '34', soporte: 'Tunes Digital', entorno: 'aeropuerto', width: 3888, height: 648, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '35', soporte: 'Hola Madrid', entorno: 'aeropuerto', width: 4032, height: 792, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '36', soporte: 'LED - Fast track', entorno: 'aeropuerto', width: 1350, height: 720, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '37', soporte: 'LED - Embarques 1', entorno: 'aeropuerto', width: 1584, height: 504, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '38', soporte: 'LED - bajada sala 10', entorno: 'aeropuerto', width: 1620, height: 720, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '39', soporte: 'LED - Embarques 2', entorno: 'aeropuerto', width: 1620, height: 900, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '40', soporte: 'LED - Acceso Embarques', entorno: 'aeropuerto', width: 1680, height: 960, ciudad: 'Madrid', terminal: 'T2', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '41', soporte: 'LED - Salidas facturación', entorno: 'aeropuerto', width: 1680, height: 960, ciudad: 'Madrid', terminal: 'T2', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '42', soporte: 'LED - Duty Free 1', entorno: 'aeropuerto', width: 1890, height: 900, ciudad: 'Madrid', terminal: 'T4S', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '43', soporte: 'LED - Duty Free 2', entorno: 'aeropuerto', width: 1980, height: 1080, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '44', soporte: 'LED - Entrecintas MAD', entorno: 'aeropuerto', width: 3840, height: 2160, ciudad: 'Madrid', terminal: 'T1', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '45', soporte: 'LED - Puente Aereo', entorno: 'aeropuerto', width: 990, height: 540, ciudad: 'Madrid', terminal: 'T4', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '46', soporte: 'LED - Llegadas', entorno: 'aeropuerto', width: 990, height: 630, ciudad: 'Madrid', terminal: 'T2', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
  { id: '47', soporte: 'Mupi Digital MAD', entorno: 'aeropuerto', width: 2160, height: 3840, ciudad: 'Madrid', terminal: 'T1 - T2 - T3 - T4 - T4s', formats: ALL_FORMATS, durationSeconds: DEFAULT_DURATION, fpsAllowed: DEFAULT_FPS, maxSizeBytes: MAX_SIZE },
];
