import Game from './game.js';

interface GameService {
  get(id: number): Game | undefined;
  post(game: Game): Game | undefined;
  delete(id: number): Game | undefined;
}

export default class GameServiceImpl implements GameService {
  private games: Game[];
   
  constructor(games: Game[]) {
    this.games = games;
  }

  get(id: number): Game | undefined {
    const result: Game[] = this.games.filter(g => g.id == id);
    return result.length == 1 ? result[0] : undefined;
  }

  post(game: Game): Game | undefined {
    return game;
  }

  delete(id: number): Game | undefined {
    return this.get(id);
  }
}