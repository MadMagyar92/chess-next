import { ICaptureGrid, IGameTemplate, ITerrainGrid, IUnitGrid, Id } from '../api';

export class GameTemplateImpl implements IGameTemplate {
   private id: Id;
   private terrain: ITerrainGrid;
   private capture: ICaptureGrid;
   private unit: IUnitGrid;
   
   constructor(id: Id, terrain: ITerrainGrid, capture: ICaptureGrid, unit: IUnitGrid) {
      this.id = id;
      this.terrain = terrain;
      this.capture = capture;
      this.unit = unit;
   }

   getId(): Id {
      return this.id;
   }

   getTerrainGrid(): ITerrainGrid {
      return this.terrain;
   }

   getCaptureGrid(): ICaptureGrid {
      return this.capture;
   }

   getUnitGrid(): IUnitGrid {
      return this.unit;
   }
}