import { MovementMetadataType } from "./movement";
import { OffenseMetadataType } from "./offense";
import { DefenseMetadataType } from "./defense";
import { IMetadataConfig } from "../app";

enum SystemUnit {
   INF = '@unit/inf',  // infantry
   SUP = '@unit/sup',  // support infantry
   ATV = '@unit/atv',  // all-terrain infantry
   UTV = '@unit/utv',  // utility vehicle
   UAV = '@unit/uav',  // offensive utility 
   ARM = '@unit/arm'   // armor
}

type CustomUnit = string;
export type UnitMetadataType = SystemUnit | CustomUnit;

type UnitOffenseRange = {
   min: number;
   max: number;
};

type UnitMetadataItem = {
   id: UnitMetadataType;
   label: string;
   movement: MovementMetadataType;
   offense: OffenseMetadataType;
   defense: DefenseMetadataType;
   fuel: number;
   speed: number;
   ammo: number;
   range: UnitOffenseRange;
};

export type UnitMetadataConfig = IMetadataConfig & UnitMetadataItem[];