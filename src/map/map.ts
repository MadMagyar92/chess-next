import { TerrainType } from './terrain';

export class Map {
   id: number;
   terrain: TerrainType[][];
   
   constructor(id: number, terrain: TerrainType[][]) {
      this.id = id;
      this.terrain = terrain;
   }

   getId(): number {
      return this.id;
   }

   get(x: number, y: number): TerrainType {
      return this.terrain[x][y];
   }
}