export enum ConfigKey {
   DEFENSE = '@config/defense',
   MOVEMENT = '@config/movement',
   OFFENSE = '@config/offense',
   TERRAIN = '@config/terrain',
   UNIT = '@config/unit',
};

export enum ConfigNamespace {
   DEFENSE = '@defense',
   MOVEMENT = '@movement',
   OFFENSE = '@offense',
   TERRAIN = '@terrain',
   UNIT = '@unit',
};

export type Config = {
   key: ConfigKey;
   namespace: ConfigNamespace;
};

export const CONFIGS: Config[] = [
   {
      key: ConfigKey.DEFENSE,
      namespace: ConfigNamespace.DEFENSE,
   },
   {
      key: ConfigKey.MOVEMENT,
      namespace: ConfigNamespace.MOVEMENT,
   },
   {
      key: ConfigKey.OFFENSE,
      namespace: ConfigNamespace.OFFENSE,
   },
   {
      key: ConfigKey.TERRAIN,
      namespace: ConfigNamespace.TERRAIN,
   },
   {
      key: ConfigKey.UNIT,
      namespace: ConfigNamespace.UNIT,
   },
];