import { MovementConfigKey } from "./movement";
import { OffenseConfigKey } from "./offense";
import { DefenseConfigKey } from "./defense";

export type UnitConfigKey = string;

type Range = {
   min: number;
   max: number;
};

type UnitConfigItem = {
   id: UnitConfigKey;
   label: string;
   movement: MovementConfigKey;
   offense: OffenseConfigKey;
   defense: DefenseConfigKey;
   fuel: number;
   speed: number;
   ammo: number;
   range: Range;
};

export type UnitConfig = UnitConfigItem[];