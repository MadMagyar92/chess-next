import { IMetadata, Metadata } from "../app/metadata";
import { Terrain } from "./terrain";

export enum SystemMovement {
   FOO = '@movement/foo',  // foot
   BIK = '@movement/bik',  // bike
   WHE = '@movement/whe',  // wheel
   TRE = '@movement/tre'   // tread
}

export type CustomMovement = string;
export type Movement = SystemMovement | CustomMovement;

export type TerrainFuelConfigItem = {
   terrain: Terrain;
   fuel: number;
}

export type TerrainFuelConfig = TerrainFuelConfigItem[];

export type MovementMetadataItem = {
   id: Movement;
   label: string;
   config: TerrainFuelConfig;
}

export class MovementMetadata extends Array<MovementMetadataItem> implements IMetadata {
   type: Metadata.MOVEMENT;
}