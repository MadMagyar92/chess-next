import { IMetadataConfig } from "../app";
import { TerrainMetadataType } from "./terrain";

enum SystemDefense {
   INF = '@defense/inf',  // infantry
   SUP = '@defense/sup',  // support infantry
   ATV = '@defense/atv',  // all-terrain infantry
   UTV = '@defense/utv',  // utility vehicle
   UAV = '@defense/uav',  // offensive utility 
   ARM = '@defense/arm'   // armor
}

type CustomDefense = string;
export type DefenseMetadataType = SystemDefense | CustomDefense;

type TerrainDefenseMetadataItem = {
   terrain: TerrainMetadataType;
   defense: number;
};

type TerrainDefenseMetadata = TerrainDefenseMetadataItem[];

type DefenseMetadataItem = {
   id: DefenseMetadataType;
   config: TerrainDefenseMetadata;
};

export type DefenseMetadataCollection = IMetadataConfig & DefenseMetadataItem[];