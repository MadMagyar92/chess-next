export enum SystemTerrain {
   UND = '@terrain/und', // undeveloped
   RUR = '@terrain/rur', // rural
   SUB = '@terrain/sub', // suburban
   URB = '@terrain/urb', // urban
   FOR = '@terrain/for', // forest
   HIL = '@terrain/hil', // hills
   MTN = '@terrain/mtn'  // mountains
}

export type CustomTerrain = string;

export type Terrain = SystemTerrain | CustomTerrain;

export class TerrainConfigItem {
   id: Terrain;
   label: string;
}

export type TerrainConfig = TerrainConfigItem[];