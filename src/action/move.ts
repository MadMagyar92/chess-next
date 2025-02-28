export enum MoveType {
   FOOT_1,  // infantry
   FOOT_2,  // infantry encumbered
   SWHEEL,  // all-terrain infantry
   MWHEEL,  // utility vehicle
   HWHEEL,  // medium utility vehicle
   TREADS,  // artillery and armor
}
 
interface IMove {
   getType(): MoveType;
   getFuelCost(): number;
   getPrevious(): IMove;
}

export class Move implements IMove {
   private type: MoveType;
   private cost: number;
   private previous: IMove;
   
   constructor(type: MoveType, cost: number, previous: IMove) {
      this.type = type;
      this.cost = cost;
      this.previous = previous;
   }

   getType(): MoveType {
      return this.type;
   }

   getFuelCost(): number {
      return this.cost;
   }

   getPrevious(): IMove {
      return this.previous;
   }
}