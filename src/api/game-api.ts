import { Move, MoveService } from '../action';
import { Game, Unit } from '../game';
import { Map } from '../map';
import { CoreService } from '../core-service';

export function getGamesApi(coreService: CoreService) {
   return (req, res) => {
      res.send(coreService.game().getAll());
   };
}

export function getGameApi(coreService: CoreService) {
   return (req, res) => {
      const { params: { gameId }} = req;
      const game: Game = coreService.game().get(gameId);
      if (!game) {
         res.sendStatus(404);
      }
      res.send(game);
   };
}

export function getUnitFromGameApi(coreService: CoreService) {
   return (req, res) => {
      const { params: {gameId, x, y }} = req;
      const game: Game = coreService.game().get(gameId);
      if (!game) {
         res.sendStatus(404);
      }
      const unit: Unit = game.getUnit(x, y);
      if (!unit) {
         res.sendStatus(404);
      }
      res.send(unit);
   };
}

export function getMovesForUnitFromGameApi(coreService: CoreService) {
   return (req, res) => {
      const { params: {gameId, x, y }} = req;
      const game: Game = coreService.game().get(gameId);
      if (!game) {
         res.sendStatus(404);
      }
      const unit: Unit = game.getUnit(x, y);
      if (!unit) {
         res.sendStatus(404);
      }
      if (!unit.isActive()) {
         res.sendStatus(400);
      }
      const moves: Move[] = coreService.move(gameId).getMoves(unit);
      res.send(moves);
   };
}