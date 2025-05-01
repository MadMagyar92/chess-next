export enum Metadata {
   ACTION = '@metadata/action',
   DEFENSE = '@metadata/defense',
   MOVEMENT = '@metadata/movement',
   OFFENSE = '@metadata/offense',
   TERRAIN = '@metadata/terrain',
   UNIT = '@metadata/unit',
}

export type IMetadata = {
   type: Metadata;
};

export type IMetadataConfig = {

};

export type IMetadataService<T extends IMetadataConfig> = {
   type: Metadata;
   config: T;
};