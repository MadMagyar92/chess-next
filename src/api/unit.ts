import { Unit } from "../schema";
import { IStoreable } from "./storeable";

export interface IUnit extends IStoreable {
   getType(): Unit;
   getTeam(): number;
   isActive(): boolean;
}