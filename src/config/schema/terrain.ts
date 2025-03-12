export enum Terrain {
   UND, // undeveloped
   RUR, // rural
   SUB, // suburban
   URB, // urban
   FOR, // forest
   HIL, // hills
   MTN, // mountains
}

export class TerrainConfig {
   private id: Terrain;
   private label: string;
}