import { ICaptureGrid, IGame, IGameTemplate, ITerrainGrid, IUnitGrid, Id } from '../api';

export class Game implements IGame {
   id: Id;

   constructor(id: Id) {
      this.id = id;
   }

   getId(): Id {
      return this.id;
   }

   getTerrainGrid(): ITerrainGrid {
      throw new Error('Method not implemented.');
   }

   getCaptureGrid(): ICaptureGrid {
      throw new Error('Method not implemented.');
   }

   getUnitGrid(): IUnitGrid {
      throw new Error('Method not implemented.');
   }
}

export class Map implements IGameTemplate {
   id: Id;
   
   constructor(id: Id) {
      this.id = id;
   }

   getId(): Id {
      return this.id;
   }

   getTerrainGrid(): ITerrainGrid {
      throw new Error('Method not implemented.');
   }

   getCaptureGrid(): ICaptureGrid {
      throw new Error('Method not implemented.');
   }

   getUnitGrid(): IUnitGrid {
      throw new Error('Method not implemented.');
   }
}