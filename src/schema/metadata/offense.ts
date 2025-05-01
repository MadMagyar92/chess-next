import { IMetadataConfig } from "../app";
import { UnitMetadataType } from "./unit";

enum SystemOffense {
   INF = '@offense/inf',  // rifle
   SUP = '@offense/sup',  // machine gun
   ATV = '@offense/atv',  // machine gun
   UTV = '@offense/utv',  // machine gun
   UAV = '@offense/uav',  // tow missle
   ARM = '@offense/arm'   // cannon
}

type CustomOffense = string;
export type OffenseMetadataType = SystemOffense | CustomOffense;

type UnitDamageMetadataItem = {
   unit: UnitMetadataType;
   damage: number;
};

type UnitDamageMetadata = UnitDamageMetadataItem[];

type OffenseMetadataItem = {
   id: OffenseMetadataType;
   label: string;
   config: UnitDamageMetadata;
};

export type OffenseMetadataCollection = IMetadataConfig & OffenseMetadataItem[];