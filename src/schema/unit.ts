import { Movement } from "./movement";
import { Offense } from "./offense";
import { Defense } from "./defense";

export enum SystemUnit {
   INF = '@unit/inf',  // infantry
   SUP = '@unit/sup',  // support infantry
   ATV = '@unit/atv',  // all-terrain infantry
   UTV = '@unit/utv',  // utility vehicle
   UAV = '@unit/uav',  // offensive utility 
   ARM = '@unit/arm'   // armor
}

export type CustomUnit = string;

export type Unit = SystemUnit | CustomUnit;

export class Range {
   min: number;
   max: number;
}

export class UnitConfig {
   id: Unit;
   label: string;
   movement: Movement;
   offense: Offense;
   defense: Defense;
   fuel: number;
   speed: number;
   ammo: number;
   range: Range;
}