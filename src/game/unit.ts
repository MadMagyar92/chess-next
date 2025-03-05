import { UnitConfig } from "../metadata/system/unit";

interface IUnit {
   getId(): number;
   getConfig(): UnitConfig;
   isActive(): boolean;
}

export class Unit implements IUnit {
   private id: number;
   private config: UnitConfig;
   private active: boolean;

   constructor(id: number, config: UnitConfig, active: boolean) {
      this.id = id;
      this.config = config;
      this.active = active;
   }

   getId(): number {
      return this.id;
   }

   getConfig(): UnitConfig {
      return this.config;
   }

   isActive(): boolean {
      return this.active;
   }
}