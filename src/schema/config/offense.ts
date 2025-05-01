import { UnitMetadataKey } from "./unit";

type OffenseMetadataConfigItem = {
   unit: UnitMetadataKey;
   damage: number;
};

type OffenseMetadataConfig = OffenseMetadataConfigItem[];

export type OffenseMetadataKey = string;

type OffenseMetadataItem = {
   id: OffenseMetadataKey;
   label: string;
   config: OffenseMetadataConfig;
};

export type OffenseMetadata = OffenseMetadataItem[];