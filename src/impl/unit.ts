import { IUnit } from "../api";
import { UnitConfig } from "../schema";

export class UnitImpl implements IUnit {
   private id: number;
   private config: UnitConfig;
   private team: number;
   private active: boolean;

   constructor(id: number, config: UnitConfig, team: number, active: boolean) {
      this.id = id;
      this.config = config;
      this.team = team;
      this.active = active;
   }

   getId(): number {
      return this.id;
   }

   getConfig(): UnitConfig {
      return this.config;
   }

   getTeam(): number {
      throw this.team;
   }

   isActive(): boolean {
      return this.active;
   }
}