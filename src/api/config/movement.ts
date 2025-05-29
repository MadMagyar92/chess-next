import { TerrainConfigKey } from './terrain';

type MovementConfigItemEntry = {
   terrain: TerrainConfigKey;
   fuel: number;
};

export type MovementConfigKey = string;

export type MovementConfigItem = {
   key: MovementConfigKey;
   label: string;
   fuel: MovementConfigItemEntry[];
};

export type MovementConfig = MovementConfigItem[];