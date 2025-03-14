import { Movement } from '../schema';

interface IMove {
   getType(): Movement;
   getFuelCost(): number;
   getPrevious(): IMove;
}

export class Move implements IMove {
   private type: Movement;
   private cost: number;
   private previous: IMove;
   
   constructor(type: Movement, cost: number, previous: IMove) {
      this.type = type;
      this.cost = cost;
      this.previous = previous;
   }

   getType(): Movement {
      return this.type;
   }

   getFuelCost(): number {
      return this.cost;
   }

   getPrevious(): IMove {
      return this.previous;
   }
}