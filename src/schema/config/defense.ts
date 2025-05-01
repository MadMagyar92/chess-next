import { TerrainConfigKey } from "./terrain";

type DefenseConfigItemEntry = {
   terrain: TerrainConfigKey;
   defense: number;
};

export type DefenseConfigKey = string;

type DefenseConfigItem = {
   key: DefenseConfigKey;
   config: DefenseConfigItemEntry[];
};

export type DefenseConfig = DefenseConfigItem[];