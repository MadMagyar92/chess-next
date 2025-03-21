import { IMetadata, Metadata } from "../app/metadata";
import { Unit } from "./unit";

export enum SystemOffense {
   INF = '@offense/inf',  // rifle
   SUP = '@offense/sup',  // machine gun
   ATV = '@offense/atv',  // machine gun
   UTV = '@offense/utv',  // machine gun
   UAV = '@offense/uav',  // tow missle
   ARM = '@offense/arm'   // cannon
}

export type CustomOffense = string;
export type Offense = SystemOffense | CustomOffense;

export type UnitDamageMetadataItem = {
   unit: Unit;
   damage: number;
};

export type UnitDamageMetadata = UnitDamageMetadataItem[];

export type OffenseMetadataItem = {
   id: Offense;
   label: string;
   config: UnitDamageMetadata;
};

export class OffenseMetadata extends Array<OffenseMetadataItem> implements IMetadata {
   type: Metadata.OFFENSE;
}