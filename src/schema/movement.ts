import { Terrain } from "./terrain";

export enum SystemMovement {
   FOO = '@movement/foo',  // foot
   BIK = '@movement/bik',  // bike
   WHE = '@movement/whe',  // wheel
   TRE = '@movement/tre'   // tread
}

export type CustomMovement = string;

export type Movement = SystemMovement | CustomMovement;

export class MovementCostConfigItem {
   terrain: Terrain;
   fuel: number;
}

export class MovementConfigItem {
   id: Movement;
   label: string;
   config: MovementCostConfigItem[];
}

export type MovementConfig = MovementConfigItem[];