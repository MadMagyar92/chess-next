import { TerrainConfigKey } from './terrain';

type MovementConfigItemEntry = {
   terrain: TerrainConfigKey;
   fuel: number;
};

export type MovementConfigKey = string;

type MovementConfigItem = {
   key: MovementConfigKey;
   label: string;
   config: MovementConfigItemEntry[];
};

export type MovementConfig = MovementConfigItem[];