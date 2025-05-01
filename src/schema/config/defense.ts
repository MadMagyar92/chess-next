import { TerrainMetadataKey } from "./terrain";

type DefenseMetadataConfigItem = {
   terrain: TerrainMetadataKey;
   defense: number;
};

type DefenseMetadataConfig = DefenseMetadataConfigItem[];

export type DefenseMetadataKey = string;

type DefenseMetadataItem = {
   id: DefenseMetadataKey;
   config: DefenseMetadataConfig;
};

export type DefenseMetadata = DefenseMetadataItem[];