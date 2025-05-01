import { IMetadataConfig } from "../app/metadata";
import { TerrainMetadataType } from "./terrain";

enum SystemMovement {
   FOO = '@movement/foo',  // foot
   BIK = '@movement/bik',  // bike
   WHE = '@movement/whe',  // wheel
   TRE = '@movement/tre'   // tread
}

type CustomMovement = string;
export type MovementMetadataType = SystemMovement | CustomMovement;

type TerrainFuelConfigItem = {
   terrain: TerrainMetadataType;
   fuel: number;
}

type TerrainFuelConfig = TerrainFuelConfigItem[];

type MovementMetadataItem = {
   id: MovementMetadataType;
   label: string;
   config: TerrainFuelConfig;
}

export type MovementMetadataConfig = IMetadataConfig & MovementMetadataItem[];