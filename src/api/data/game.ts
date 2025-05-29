import { TerrainConfigKey, UnitConfigKey } from '../config';

export type TerrainDataItem = {
   id: number;
   configKey: TerrainConfigKey;
   x: number;
   y: number;
};

export type UnitDataItem = {
   id: number;
   configKey: UnitConfigKey;
   x: number;
   y: number;
};

export type GameDataItem = {
   id: number;
   terrain: TerrainDataItem[];
   units: UnitDataItem[];
};

export type GameData = GameDataItem[];