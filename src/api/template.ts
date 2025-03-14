import { ICaptureGrid, ITerrainGrid, IUnitGrid } from "./grid";
import { IStoreable } from "./storeable";

export interface IGameTemplate extends IStoreable {
   getTerrainGrid(): ITerrainGrid;
   getCaptureGrid(): ICaptureGrid;
   getUnitGrid(): IUnitGrid;
}