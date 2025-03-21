import { IData } from "../../schema";

export interface IGrid<T extends IData> extends IData {
   getSizeX(): number;
   getSizeY(): number;
   get(x: number, y: number): T | undefined;
}