enum SystemTerrain {
   UND = '@terrain/und', // undeveloped
   RUR = '@terrain/rur', // rural
   SUB = '@terrain/sub', // suburban
   URB = '@terrain/urb', // urban
   FOR = '@terrain/for', // forest
   HIL = '@terrain/hil', // hills
   MTN = '@terrain/mtn'  // mountains
}

type CustomTerrain = string;

export type Terrain = SystemTerrain | CustomTerrain;

export class TerrainConfig {
   private id: Terrain;
   private label: string;
}