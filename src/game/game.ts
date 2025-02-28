import { Unit } from './unit';

interface IGame {
   getId(): number;
   getMapId(): number;
   getUnit(x: number, y: number): Unit;
}

export class Game implements IGame {
   id: number;
   mapId: number;
   units: Unit[][];

   constructor(id: number) {
      this.id = id;
   }

   getId(): number {
      return this.id;
   }

   getMapId(): number {
      return this.mapId;
   }

   getUnit(x: number, y: number): Unit {
      return this.units[x][y];
   }
}