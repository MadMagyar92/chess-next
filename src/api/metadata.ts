import { DefenseConfig, MovementConfig, OffenseConfig, PlayerConfig, TerrainConfig, UnitConfig } from "./config";
import { GameData, MapData } from "./data";

enum MetadataType {
   CONFIG = '@config',
   DATA = '@data',
}

enum MetadataName {
   DEFENSE = 'defense',
   GAME = 'game',
   MAP = 'map',
   MOVEMENT = 'movement',
   OFFENSE = 'offense',
   PLAYER = 'player',
   TERRAIN = 'terrain',
   UNIT = 'unit',
}

type MetadataSchema = DefenseConfig | MovementConfig | OffenseConfig | PlayerConfig | TerrainConfig | UnitConfig | GameData | MapData;

export class Metadata<T> {
   type: MetadataType;
   name: MetadataName;
   path: string;
   constructor(type: MetadataType, name: MetadataName, path: string) {
      this.type = type;
      this.name = name;
      this.path = path;
   }
   getKey(): string {
      return `${this.type}/${this.name}`;
   }
   get(customPath: string): T {
      if (customPath) {
         return JSON.parse(require('fs').readFileSync(customPath, 'utf8'));
      }
      return JSON.parse(require('fs').readFileSync(this.path, 'utf8'));
   }
}

// CONFIG
export const DEFENSE: Metadata<DefenseConfig> = new Metadata<DefenseConfig>(MetadataType.CONFIG, MetadataName.DEFENSE, "./config/defense.json");
export const MOVEMENT: Metadata<MovementConfig> = new Metadata<MovementConfig>(MetadataType.CONFIG, MetadataName.MOVEMENT, "./config/movement.json");
export const OFFENSE: Metadata<OffenseConfig> = new Metadata<OffenseConfig>(MetadataType.CONFIG, MetadataName.OFFENSE, "./config/offense.json");
export const PLAYER: Metadata<PlayerConfig> = new Metadata<PlayerConfig>(MetadataType.CONFIG, MetadataName.PLAYER, "./config/player.json");
export const TERRAIN: Metadata<TerrainConfig> = new Metadata<TerrainConfig>(MetadataType.CONFIG, MetadataName.TERRAIN, "./config/terrain.json");
export const UNIT: Metadata<UnitConfig> = new Metadata<UnitConfig>(MetadataType.CONFIG, MetadataName.UNIT, "./config/unit.json");
export const CONFIGS: Metadata<MetadataSchema>[] = [
   DEFENSE,
   MOVEMENT,
   OFFENSE,
   PLAYER,
   TERRAIN,
   UNIT,
];

// DATA
export const GAME: Metadata<GameData> = new Metadata<GameData>(MetadataType.DATA, MetadataName.GAME, "./data/game.json");
export const MAP: Metadata<MapData> = new Metadata<MapData>(MetadataType.DATA, MetadataName.MAP, "./data/map.json");
export const DATAS: Metadata<MetadataSchema>[] = [
   GAME,
   MAP,
];

// DEFAULT
export const DEFAULT: Metadata<MetadataSchema>[] = [
   ...CONFIGS, ...DATAS
];