import { ICapture } from "./capture";
import { IStoreable } from "./storeable";
import { ITerrain } from "./terrain";
import { IUnit } from "./unit";

interface IGrid<T> extends IStoreable {
   getSizeX(): number;
   getSizeY(): number;
   get(x: number, y: number): T | undefined;
}

export interface ITerrainGrid extends IGrid<ITerrain> {

}

export interface ICaptureGrid extends IGrid<ICapture> {

}

export interface IUnitGrid extends IGrid<IUnit> {

}