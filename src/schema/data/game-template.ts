import { IData } from "../app/data";
import { ITerrainGrid } from "./terrain";
import { IUnitGrid } from "./unit";

export type IGameTemplate = IData & {
   terrain: ITerrainGrid;
   units: IUnitGrid;
}