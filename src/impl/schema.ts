import * as fs from 'fs';
import { ActionConfig, AppConfig, CaptureConfig, DefenseConfig, Metadata, MetadataConfigItem, MovementConfig, OffenseConfig, TerrainConfig, UnitConfig } from "../schema";

type MetadataConfig = ActionConfig | CaptureConfig | DefenseConfig | MovementConfig | OffenseConfig | TerrainConfig | UnitConfig;

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