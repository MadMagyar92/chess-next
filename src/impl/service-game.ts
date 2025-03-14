import { IGame, Id, IService } from '../api';

export class GameService implements IService<IGame> {
   private games: IGame[];
      
   constructor(games: IGame[]) {
      this.games = games;
   }

   getAll(): IGame[] {
      return this.games;
   }

   get(id: Id): IGame | undefined {
      const result: IGame[] = this.games.filter(g => g.getId() == id);
      return result.length == 1 ? result[0] : undefined;
   }
   
   create(game: IGame): Id {
      this.games.push(game);
      return game.getId();
   }

   post(game: IGame): IGame | undefined {
      return game;
   }

   delete(id: number): IGame | undefined {
      return this.get(id);
   }
}