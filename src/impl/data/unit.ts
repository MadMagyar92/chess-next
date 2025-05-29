import { Id, IUnit, Metadata } from '../../schema';
import { IDataService } from '../../api/config';

export class UnitServiceImpl implements IDataService<IUnit> {
   data: IUnit[];
   constructor(data: IUnit[]) {
      this.data = data;
   }
   
   get(game: Id, x1: number, y1: number): IUnit | undefined {
      return this.data.filter(({ gameId }) => gameId == game)
                           .filter(({ x }) => x == x1)
                           .filter(({ y }) => y == y1)[0];
   }
}

export class UnitImpl implements IUnit {
   gameId: number;
   type = Metadata.UNIT;
   id: Id;
   team: number;
   active: boolean;
   x: number;
   y: number;
}