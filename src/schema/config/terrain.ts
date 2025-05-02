export type TerrainConfigKey = string;

type TerrainConfigItem = {
   key: TerrainConfigKey;
   label: string;
};

export type TerrainConfig = TerrainConfigItem[];