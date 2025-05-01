import { TerrainMetadataKey } from "./terrain";

type MovementMetadataConfigItem = {
   terrain: TerrainMetadataKey;
   fuel: number;
};

type MovementMetadataConfig = MovementMetadataConfigItem[];

export type MovementMetadataKey = string;

type MovementMetadataItem = {
   id: MovementMetadataKey;
   label: string;
   config: MovementMetadataConfig;
};

export type MovementMetadata = MovementMetadataItem[];