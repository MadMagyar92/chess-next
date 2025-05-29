import { UnitConfigKey } from './unit';

type OffenseConfigItemEntry = {
   unit: UnitConfigKey;
   damage: number;
};

export type OffenseConfigKey = string;

export type OffenseConfigItem = {
   key: OffenseConfigKey;
   label: string;
   damage: OffenseConfigItemEntry[];
};

export type OffenseConfig = OffenseConfigItem[];