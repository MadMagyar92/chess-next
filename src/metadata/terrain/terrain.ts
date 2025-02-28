enum TerrainType {
  Up = 1,
  Down,
  Left,
  Right,
}


export class Terrain {
    private type: string;
     
    constructor(type: string) {
      this.type = type;
    }  
}