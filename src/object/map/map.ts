import Terrain from './../../metadata/terrain/terrain.js';

export default class Map {
    id: number;
    terrain: Terrain[][];
     
    constructor(id: number) {
      this.id = id;
    }
}