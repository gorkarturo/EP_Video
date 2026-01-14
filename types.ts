
export interface MediaSpec {
  id: string;
  soporte: string;
  entorno: string;
  ciudad: string;
  terminal?: string;
  width: number;
  height: number;
  durationSeconds?: number; // Only for video
  fpsAllowed?: number[];   // Only for video
  formats: string[];
  maxSizeBytes?: number;
}

export interface MediaMetadata {
  fileName: string;
  type: 'video' | 'image';
  width: number;
  height: number;
  duration?: number;
  fps?: number;
  size: number;
  extension: string;
  colorSpace?: string;
}

export interface CompatibilityResult {
  spec: MediaSpec;
  isCompatible: boolean;
  mismatches: string[];
}
