import { IPosition, IUnit } from '../../schema/data';

export type IMove = IPosition & {
   type: MovementMetadataType;
   target: IPosition;
   power: number;
};

export interface IMoveService {
   get(gameId: number, unit: IUnit, target: IPosition): IMove | undefined;
}

export class MoveServiceImpl implements IMoveService {
   get(gameId: number, unit: IUnit, target: IPosition) {
      throw new Error('Method not implemented.');
   }
   
}