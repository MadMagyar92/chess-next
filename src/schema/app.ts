enum SystemSchema {
   ACTION = '@schema/action',
   CAPTURE = '@schema/capture',
   DEFENSE = '@schema/defense',
   MOVEMENT = '@schema/movement',
   OFFENSE = '@schema/offense',
   TERRAIN = '@schema/terrain',
   UNIT = '@schema/unit',
}

type CustomSchema = string;

export type AppSchema = SystemSchema | CustomSchema;

class AppSchemaConfigItem {
   private schema: AppSchema;
   private namespace: string;
   private path: string;
}

export class AppSchemaConfig {
   private name: string;
   private schemas: AppSchemaConfigItem[];
}