type GameInstanceItem = {
   name: string;
   terrain: any;
   units: any;
};

export type GameInstanceKey = string;

export type GameInstance = {
   key: GameInstanceKey;
   instances: GameInstanceItem[];
};