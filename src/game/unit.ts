export enum UnitType {
   INF,     // infantry
   INF_MG,  // infantry with heavy machine gun
   INF_AV,  // infantry with anti-vehicle rockets
   ATI,     // all-terrain infantry
   UTV,     // utility vehicle with heavy machine gun
   UTV_AV,  // utility vehicle with anti-vehicle rockets
   MUV,     // medium utility vehicle
   MUV_AV,  // medium utility vehicle with long range rockets
   ART,     // artillery
   ARM,     // armor
}
 
interface IUnit {
   getType(): UnitType;
}

export class Unit implements IUnit {
   private type: UnitType;
      
   constructor(type: UnitType) {
      this.type = type;
   }

   getType(): UnitType {
      return this.type;
   }
}