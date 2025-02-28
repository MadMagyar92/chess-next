import { Unit } from './unit';

interface IUnitService {
  get(x: number, y: number): Unit | undefined;
}

export class UnitService implements IUnitService {
   private units: Unit[][];
   
   constructor(units: Unit[][]) {
      this.units = units;
   }
  
   get(x: number, y: number): Unit | undefined {
      return this.units[x][y];
   }
}