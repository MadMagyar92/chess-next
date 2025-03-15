import { Unit } from "./unit";

export enum SystemOffense {
   INF = '@offense/inf',  // rifle
   SUP = '@offense/sup',  // machine gun
   ATV = '@offense/atv',  // machine gun
   UTV = '@offense/utv',  // machine gun
   UAV = '@offense/uav',  // tow missle
   ARM = '@offense/arm'   // cannon
}

export type CustomOffense = string;

export type Offense = SystemOffense | CustomOffense;

export class OffenseDamageConfigItem {
   unit: Unit;
   damage: number;
}

export class OffenseConfigItem {
   id: Offense;
   label: string;
   config: OffenseDamageConfigItem[];
}

export type OffenseConfig = OffenseConfigItem[];