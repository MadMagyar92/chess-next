import { UnitMetadataType } from '../../schema';
import { IPosition } from '../../schema/data';

export type IAttack = IPosition & {
   type: UnitMetadataType;
   power: number;
};

export interface IAttackService {
   get(gameId: number, target: IPosition): IAttack | undefined;
}

export class AttackServiceImpl implements IAttackService {
   get(gameId: number, target: IPosition): IAttack | undefined {
      throw new Error('Method not implemented.');
   }
   
}