import * as fs from 'fs';
import { ActionConfig, AppConfig, CaptureConfig, DefenseMetadata, Metadata, MetadataConfigItem, MovementMetadata, OffenseMetadata, TerrainMetadata, UnitMetadata } from '../schema';

type MetadataConfig = ActionConfig | CaptureConfig | DefenseMetadata | MovementMetadata | OffenseMetadata | TerrainMetadata | UnitMetadata;

class MetadataConfigEntry {
   key: Metadata;
   config: MetadataConfig;
}

function getConfigs({ configs }: AppConfig): MetadataConfigEntry[] {
   return configs.map(({ metadata, path }) => {
      return {
         key: metadata,
         config: JSON.parse(fs.readFileSync(path, 'utf-8'))
      };
   })
}