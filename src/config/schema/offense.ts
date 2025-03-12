import { Unit } from "./unit";

export enum Offense {
   INF,  // rifle
   SUP,  // machine gun
   ATV,  // machine gun
   UTV,  // machine gun
   UAV,  // tow missle
   ARM   // cannon
}

class OffenseConfigItem {
   private unit: Unit;
   private damage: number;
}

export class OffenseConfig {
   private id: Offense;
   private label: string;
   private config: OffenseConfigItem[];
}