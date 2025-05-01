import { IMetadata, IMetadataConfig, Metadata } from "../app/metadata";

enum SystemTerrain {
   UND = '@terrain/und', // undeveloped
   RUR = '@terrain/rur', // rural
   SUB = '@terrain/sub', // suburban
   URB = '@terrain/urb', // urban
   FOR = '@terrain/for', // forest
   HIL = '@terrain/hil', // hills
   MTN = '@terrain/mtn'  // mountains
}

type CustomTerrain = string;
export type TerrainMetadataType = SystemTerrain | CustomTerrain;

type TerrainMetadataItem = {
   id: TerrainMetadataType;
   label: string;
};

export type TerrainMetadataConfig = IMetadataConfig & TerrainMetadataItem[];