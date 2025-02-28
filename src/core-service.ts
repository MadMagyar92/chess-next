import { MoveService } from './action';
import { GameService } from './game';
import { MapService } from './map';

interface ICoreService {
   game(): GameService;
   map(): MapService;
   move(gameId: number): MoveService;
}

export class CoreService implements ICoreService {
   private gameService: GameService;
   private mapService: MapService;

   constructor() {
      this.gameService = new GameService([]);
      this.mapService = new MapService([]);
   }

   game(): GameService {
      return this.gameService;
   }

   map(): MapService {
      return this.mapService;
   }

   move(gameId: number): MoveService {
      const g = this.game().get(gameId);
      const m = this.map().get(g.getMapId());
      return new MoveService(g, m);
   }
}