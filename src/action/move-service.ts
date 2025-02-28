import { Move, MoveType } from '../action'
import { Map, TerrainType } from '../map';
import { Game, Unit } from '../game';

class MoveCostMapping {
   moveType: MoveType;
   terrainType: TerrainType;
   cost: number;
}

class MoveCostConfig {
   moveCostMappings: MoveCostMapping[];
}

interface IMoveService {
  getMoves(unit: Unit): Move[];
}

export class MoveService implements IMoveService {
   private game: Game;
   private map: Map;
   private config: MoveCostConfig;
   
   constructor(game: Game, map: Map, config: MoveCostConfig) {
      this.game = game;
      this.map = map;
      this.config = this.config;
   }
  
   getMoves(unit: Unit): Move[] {
      return [];
   }
}