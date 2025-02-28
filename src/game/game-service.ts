import { Game } from './game';

interface IGameService {
getAll(): Game[];
  get(id: number): Game | undefined;
  post(game: Game): Game | undefined;
  delete(id: number): Game | undefined;
}

export class GameService implements IGameService {
   private games: Game[];
      
   constructor(games: Game[]) {
      this.games = games;
   }

   getAll(): Game[] {
      return this.games;
   }

   get(id: number): Game | undefined {
      const result: Game[] = this.games.filter(g => g.id == id);
      return result.length == 1 ? result[0] : undefined;
   }

   post(game: Game): Game | undefined {
      const { id } = game;
      return this.get(id);
   }

   delete(id: number): Game | undefined {
      return this.get(id);
   }
}