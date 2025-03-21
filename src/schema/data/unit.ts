import { IData } from "../app/data";
import { Unit } from "../metadata/unit";
import { IGrid } from "./grid";

export type IUnit = IData & {
   type: Unit;
   team: number;
   active: boolean;
};

export interface IUnitGrid extends IGrid<IUnit> {

};