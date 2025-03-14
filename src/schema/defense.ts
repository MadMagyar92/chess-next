import { Terrain } from "./terrain";

enum SystemDefense {
   INF = '@defense/inf',  // infantry
   SUP = '@defense/sup',  // support infantry
   ATV = '@defense/atv',  // all-terrain infantry
   UTV = '@defense/utv',  // utility vehicle
   UAV = '@defense/uav',  // offensive utility 
   ARM = '@defense/arm'   // armor
}

type CustomDefense = string;

export type Defense = SystemDefense | CustomDefense;

class DefenseBonusConfigItem {
   private terrain: Terrain;
   private defense: number;
}

class DefenseConfigItem {
   private id: Defense;
   private config: DefenseBonusConfigItem[];
}

export type DefenseConfig = DefenseConfigItem[];
