import { Grid } from './../../common';
import { Terrain } from './../../metadata';

export class Map implements Grid<Terrain> {
    id: number;
    terrain: Terrain[][];
    
    constructor(id: number, terrain: Terrain[][]) {
      this.id = id;
      this.terrain = terrain;
    }

    get(): Terrain[][] {
      return this.terrain;
    }
}