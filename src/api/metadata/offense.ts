import { Offense, Unit } from "../../schema";

export interface IOffenseMetadataService {
   getDamage(offense: Offense, defender: Unit): number | undefined;
}