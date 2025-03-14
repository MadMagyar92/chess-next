import { Unit } from "./unit";

enum SystemOffense {
   INF = '@offense/inf',  // rifle
   SUP = '@offense/sup',  // machine gun
   ATV = '@offense/atv',  // machine gun
   UTV = '@offense/utv',  // machine gun
   UAV = '@offense/uav',  // tow missle
   ARM = '@offense/arm'   // cannon
}

type CustomOffense = string;

export type Offense = SystemOffense | CustomOffense;

class OffenseConfigItem {
   private unit: Unit;
   private damage: number;
}

export class OffenseConfig {
   private id: Offense;
   private label: string;
   private config: OffenseConfigItem[];
}