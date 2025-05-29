import { TerrainConfigKey } from './terrain';

type DefenseConfigItemEntry = {
   terrain: TerrainConfigKey;
   defense: number;
};

export type DefenseConfigKey = string;

export type DefenseConfigItem = {
   key: DefenseConfigKey;
   label: string;
   defense: DefenseConfigItemEntry[];
};

export type DefenseConfig = DefenseConfigItem[];