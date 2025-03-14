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

class Range {
   private min: number;
   private max: number;
}

export class UnitConfig {
   private id: Unit;
   private label: string;
   private movement: Movement;
   private offense: Offense;
   private defense: Defense;
   private fuel: number;
   private speed: number;
   private ammo: number;
   private range: Range;
}