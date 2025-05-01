import { MovementMetadataKey } from "./movement";
import { OffenseMetadataKey } from "./offense";
import { DefenseMetadataKey } from "./defense";

export type UnitMetadataKey = string;

type Range = {
   min: number;
   max: number;
};

type UnitMetadataItem = {
   id: UnitMetadataKey;
   label: string;
   movement: MovementMetadataKey;
   offense: OffenseMetadataKey;
   defense: DefenseMetadataKey;
   fuel: number;
   speed: number;
   ammo: number;
   range: Range;
};

export type UnitMetadata = UnitMetadataItem[];