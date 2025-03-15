import { Terrain } from "../schema";
import { IStoreable } from "./storeable";

export interface ITerrain extends IStoreable {
   getType(): Terrain;
}