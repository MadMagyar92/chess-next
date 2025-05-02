import { TerrainConfigKey, UnitConfigKey } from '../config';

type TerrainInstanceItem = {
   configKey: TerrainConfigKey;
   x: number;
   y: number;
};

type UnitInstanceItem = {
   configKey: UnitConfigKey;
   x: number;
   y: number;
};

type GameInstanceItem = {
   name: string;
   terrain: TerrainInstanceItem[];
   units: UnitInstanceItem[];
};

export type GameInstanceKey = string;

export type GameInstance = {
   key: GameInstanceKey;
   instances: GameInstanceItem[];
};