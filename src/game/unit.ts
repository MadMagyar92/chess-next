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
   getId(): number;
   getType(): UnitType;
   isActive(): boolean;
}

export class Unit implements IUnit {
   private id: number;
   private type: UnitType;
   private active: boolean;

   constructor(id: number, type: UnitType, active: boolean) {
      this.id = id;
      this.type = type;
      this.active = active;
   }

   getId(): number {
      return this.id;
   }

   getType(): UnitType {
      return this.type;
   }

   isActive(): boolean {
      return this.active;
   }
}