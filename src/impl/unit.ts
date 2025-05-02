import { IUnit } from '../api';
import { UnitMetadata } from '../schema';

export class UnitImpl implements IUnit {
   private id: number;
   private config: UnitMetadata;
   private team: number;
   private active: boolean;

   constructor(id: number, config: UnitMetadata, team: number, active: boolean) {
      this.id = id;
      this.config = config;
      this.team = team;
      this.active = active;
   }

   getId(): number {
      return this.id;
   }

   getConfig(): UnitMetadata {
      return this.config;
   }

   getTeam(): number {
      throw this.team;
   }

   isActive(): boolean {
      return this.active;
   }
}