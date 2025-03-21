import { Movement } from "./movement";
import { Offense } from "./offense";
import { Defense } from "./defense";
import { IMetadata, Metadata } from "../app/metadata";

export enum SystemUnit {
   INF = '@unit/inf',  // infantry
   SUP = '@unit/sup',  // support infantry
   ATV = '@unit/atv',  // all-terrain infantry
   UTV = '@unit/utv',  // utility vehicle
   UAV = '@unit/uav',  // offensive utility 
   ARM = '@unit/arm'   // armor
}

export type CustomUnit = string;
export type Unit = SystemUnit | CustomUnit;

export type UnitOffenseRange = {
   min: number;
   max: number;
};

export type UnitMetadataItem = {
   id: Unit;
   label: string;
   movement: Movement;
   offense: Offense;
   defense: Defense;
   fuel: number;
   speed: number;
   ammo: number;
   range: UnitOffenseRange;
};

export class UnitMetadata extends Array<UnitMetadataItem> implements IMetadata {
   type: Metadata.UNIT;
}