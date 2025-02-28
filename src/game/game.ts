import { Unit } from './unit';

interface IGame {
   getId(): number;
   getMapId(): number;
   getUnits(): Unit[][];
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

   getUnits(): Unit[][] {
      return this.units;
   }
}