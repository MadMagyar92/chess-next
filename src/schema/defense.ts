import { Terrain } from "./terrain";

export enum SystemDefense {
   INF = '@defense/inf',  // infantry
   SUP = '@defense/sup',  // support infantry
   ATV = '@defense/atv',  // all-terrain infantry
   UTV = '@defense/utv',  // utility vehicle
   UAV = '@defense/uav',  // offensive utility 
   ARM = '@defense/arm'   // armor
}

export type CustomDefense = string;

export type Defense = SystemDefense | CustomDefense;

export class DefenseBonusConfigItem {
   terrain: Terrain;
   defense: number;
}

export class DefenseConfigItem {
   id: Defense;
   config: DefenseBonusConfigItem[];
}

export type DefenseConfig = DefenseConfigItem[];
