import { IGame } from '../api';
import { AbstractDataService } from './service';

export class GameDataService extends AbstractDataService<IGame> {   
   constructor(games: IGame[]) {
      super(games);
   }
}