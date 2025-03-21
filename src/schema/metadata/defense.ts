import { IMetadata, Metadata } from "../app/metadata";
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

export type TerrainDefenseMetadataItem = {
   terrain: Terrain;
   defense: number;
};

export type TerrainDefenseMetadata = TerrainDefenseMetadataItem[];

export type DefenseMetadataItem = {
   id: Defense;
   config: TerrainDefenseMetadata;
};

export class DefenseMetadata extends Array<DefenseMetadataItem> implements IMetadata {
   type: Metadata.DEFENSE;
}