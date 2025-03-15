import { IService, IUnit, IUnitGrid, Id } from '../api';

export class UnitService implements IService<IUnit>, IUnitGrid {
   private units: IUnit[];
   private unitMaps: IUnit[][];
   
   constructor(units: IUnit[], unitMaps: IUnit[][]) {
      this.units = units;
      this.unitMaps = unitMaps;
   }

   getAll(): IUnit[] {
      return this.units;
   }

   get(id: Id): IUnit | undefined {
      const result: IUnit[] = this.units.filter(g => g.getId() == id);
      return result.length == 1 ? result[0] : undefined;
   }

   create(unit: IUnit): Id {
      this.units.push(unit);
      return unit.getId();
   }

   post(unit: IUnit): IUnit | undefined {
      return unit;
   }

   delete(id: number): IUnit | undefined {
      return this.get(id);
   }

   get(x: number, y: number): IUnit | undefined {
      return this.unitMaps[x][y];
   }
}