import { UnitConfigKey } from './unit';

type OffenseConfigItemEntry = {
   unit: UnitConfigKey;
   damage: number;
};

export type OffenseConfigKey = string;

type OffenseConfigItem = {
   key: OffenseConfigKey;
   label: string;
   config: OffenseConfigItemEntry[];
};

export type OffenseConfig = OffenseConfigItem[];