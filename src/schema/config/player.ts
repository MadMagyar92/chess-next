import { UnitConfigKey } from './unit';

type PlayerConfigItemEntry = {
   unit: UnitConfigKey;
   offense: number;
   defense: number;
};

export type PlayerConfigKey = string;

type PlayerConfigItem = {
   key: PlayerConfigKey;
   config: PlayerConfigItemEntry[];
};

export type PlayerConfig = PlayerConfigItem[];