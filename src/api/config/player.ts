import { UnitConfigKey } from './unit';

type PlayerConfigItemEntry = {
   unit: UnitConfigKey;
   offense: number;
   defense: number;
};

export type PlayerConfigKey = string;

export type PlayerConfigItem = {
   key: PlayerConfigKey;
   label: string;
   bonus: PlayerConfigItemEntry[];
};

export type PlayerConfig = PlayerConfigItem[];