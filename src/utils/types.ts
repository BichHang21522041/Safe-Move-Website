export interface ISelectValue {
  value: string;
  label: string;
}

export interface Coordinates {
  type: string;
  coordinates: number[];
}

export interface Camera {
  _id: string;
  id: string;
  name: string;
  loc: Coordinates;
  values: Record<string, string>;
  dist: string;
  ptz: boolean;
  angle?: number;
  liveviewUrl: string;
  isEnabled: boolean;
  lastModified: Date; 
}