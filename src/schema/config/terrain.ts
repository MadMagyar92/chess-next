export type TerrainConfigKey = string;

type TerrainConfigItem = {
   id: TerrainConfigKey;
   label: string;
};

export type TerrainConfig = TerrainConfigItem[];