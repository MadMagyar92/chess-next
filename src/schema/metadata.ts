export enum MetadataKey {
   DEFENSE = '@metadata/defense',
   MOVEMENT = '@metadata/movement',
   OFFENSE = '@metadata/offense',
   TERRAIN = '@metadata/terrain',
   UNIT = '@metadata/unit',
};

export enum MetadataNamespace {
   DEFENSE = '@defense',
   MOVEMENT = '@movement',
   OFFENSE = '@offense',
   TERRAIN = '@terrain',
   UNIT = '@unit',
};

export type Metadata = {
   key: MetadataKey;
   namespace: MetadataNamespace;
};

export const METADATA: Metadata[] = [
   {
      key: MetadataKey.DEFENSE,
      namespace: MetadataNamespace.DEFENSE,
   },
   {
      key: MetadataKey.MOVEMENT,
      namespace: MetadataNamespace.MOVEMENT,
   },
   {
      key: MetadataKey.OFFENSE,
      namespace: MetadataNamespace.OFFENSE,
   },
   {
      key: MetadataKey.TERRAIN,
      namespace: MetadataNamespace.TERRAIN,
   },
   {
      key: MetadataKey.UNIT,
      namespace: MetadataNamespace.UNIT,
   },
];