import { Movement } from "./movement";
import { Offense } from "./offense";
import { Defense } from "./defense";

export enum Unit {
   INF,  // infantry
   SUP,  // support infantry
   ATV,  // all-terrain infantry
   UTV,  // utility vehicle
   UAV,  // offensive utility 
   ARM   // armor
}

class Range {
   private min: number;
   private max: number;
}

export class UnitConfig {
   private id: Unit;
   private movement: Movement;
   private offense: Offense;
   private defense: Defense;
   private fuel: number;
   private speed: number;
   private ammo: number;
   private range: Range;
}