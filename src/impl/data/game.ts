import { Id, IDataService, IGame, ITerrainGrid, IUnitGrid } from "../../schema";

export class GameServiceImpl implements IDataService<IGame> {
   data: IGame[];
   constructor(data: IGame[]) {
      this.data = data;
   }
   
   get(game: Id): IGame | undefined {
      return this.data.filter(({ id }) => id == game)[0];
   }
}

export class GameImpl implements IGame {
   id: Id;
   terrain: ITerrainGrid;
   units: IUnitGrid;
}