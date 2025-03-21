import { IData } from "../app/data";
import { Terrain } from "../metadata/terrain";
import { IGrid } from "./grid";

export type ITerrain = IData & {
   type: Terrain;
};

export interface ITerrainGrid extends IGrid<ITerrain> {

};