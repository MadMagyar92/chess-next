import { Terrain } from "./terrain";

export enum Defense {
   INF,  // infantry
   SUP,  // support infantry
   ATV,  // all-terrain infantry
   UTV,  // utility vehicle
   UAV,  // offensive utility 
   ARM   // armor
}

class DefenseConfigItem {
   private terrain: Terrain;
   private defense: number;
}

export class DefenseConfig {
   private id: Defense;
   private config: DefenseConfigItem;
}