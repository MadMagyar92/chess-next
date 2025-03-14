import { Terrain } from "./terrain";

enum SystemMovement {
   FOO = '@movement/foo',  // foot
   BIK = '@movement/bik',  // bike
   WHE = '@movement/whe',  // wheel
   TRE = '@movement/tre'   // tread
}

type CustomMovement = string;

export type Movement = SystemMovement | CustomMovement;

class MovementCostConfigItem {
   private terrain: Terrain;
   private fuel: number;
}

class MovementConfigItem {
   private id: Movement;
   private label: string;
   private config: MovementCostConfigItem[];
}

export type MovementConfig = MovementConfigItem[];