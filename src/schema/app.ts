export enum Metadata {
   ACTION = '@metadata/action',
   CAPTURE = '@metadata/capture',
   DEFENSE = '@metadata/defense',
   MOVEMENT = '@metadata/movement',
   OFFENSE = '@metadata/offense',
   TERRAIN = '@metadata/terrain',
   UNIT = '@metadata/unit',
}

export class MetadataConfigItem {
   metadata: Metadata;
   path: string;
}

export type MetadataConfig = MetadataConfigItem[];

export class AppConfig {
   name: string;
   configs: MetadataConfig;
}