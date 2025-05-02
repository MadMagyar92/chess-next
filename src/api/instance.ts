export enum InstanceKey {
   ATTACK = '@instance/attack',
   GAME = '@instance/game',
   MAP = '@instance/map',
   MOVE = '@instance/move',
   PLAYER = '@instance/player',
   UNIT = '@instance/unit',
};

export enum InstanceNamespace {
   ATTACK = '@attack',
   GAME = '@game',
   MAP = '@map',
   MOVE = '@move',
   PLAYER = '@player',
   UNIT = '@unit',
};

export type Instance = {
   key: InstanceKey;
   namespace: InstanceNamespace;
};

export const INSTANCES: Instance[] = [
   {
      key: InstanceKey.ATTACK,
      namespace: InstanceNamespace.ATTACK,
   },
   {
      key: InstanceKey.GAME,
      namespace: InstanceNamespace.GAME,
   },
   {
      key: InstanceKey.MAP,
      namespace: InstanceNamespace.MAP,
   },
   {
      key: InstanceKey.MOVE,
      namespace: InstanceNamespace.MOVE,
   },
   {
      key: InstanceKey.PLAYER,
      namespace: InstanceNamespace.PLAYER,
   },
   {
      key: InstanceKey.UNIT,
      namespace: InstanceNamespace.UNIT,
   }
];