import { Terrain } from "./terrain";

export enum Movement {
   FOO,  // foot
   BIK,  // bike
   WHE,  // wheel
   TRE   // tread
}

class MovementConfigItem {
   private terrain: Terrain;
   private fuel: number;
}

export class MovementConfig {
   private id: Movement;
   private label: string;
   private config: MovementConfigItem[];
}