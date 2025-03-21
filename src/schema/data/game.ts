import { IData } from "../app/data";
import { ITerrainGrid } from "./terrain";
import { IUnitGrid } from "./unit";

export type IGame = IData & {
   terrain: ITerrainGrid;
   units: IUnitGrid;
}