enum Key {
   DEFENSE = '@metadata/defense',
   MOVEMENT = '@metadata/movement',
   OFFENSE = '@metadata/offense',
   TERRAIN = '@metadata/terrain',
   UNIT = '@metadata/unit',
};

enum Namespace {
   DEFENSE = '@defense',
   MOVEMENT = '@movement',
   OFFENSE = '@offense',
   TERRAIN = '@terrain',
   UNIT = '@unit',
};

export type Metadata = {
   key: Key;
   namespace: Namespace;
};

export const METADATA: Metadata[] = [
   {
      key: Key.DEFENSE,
      namespace: Namespace.DEFENSE,
   },
   {
      key: Key.MOVEMENT,
      namespace: Namespace.MOVEMENT,
   },
   {
      key: Key.OFFENSE,
      namespace: Namespace.OFFENSE,
   },
   {
      key: Key.TERRAIN,
      namespace: Namespace.TERRAIN,
   },
   {
      key: Key.UNIT,
      namespace: Namespace.UNIT,
   },
];