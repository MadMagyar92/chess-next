import { Capture, Terrain, Unit } from "../schema";
import { IStoreable } from "./storeable";

interface IGrid<T> {
   getSizeX(): number;
   getSizeY(): number;
   get(x: number, y: number): T | undefined;
}

export interface ITerrainGrid extends IGrid<Terrain>, IStoreable {

}

export interface ICaptureGrid extends IGrid<Capture>, IStoreable {

}

export interface IUnitGrid extends IGrid<Unit>, IStoreable {

}