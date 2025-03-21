export enum Metadata {
   ACTION = '@metadata/action',
   CAPTURE = '@metadata/capture',
   DEFENSE = '@metadata/defense',
   MOVEMENT = '@metadata/movement',
   OFFENSE = '@metadata/offense',
   TERRAIN = '@metadata/terrain',
   UNIT = '@metadata/unit',
}

export type IMetadata = {
   type: Metadata;
};