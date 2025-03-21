import { Defense, Movement, Offense, Unit } from "../../schema";

export interface IUnitMetadataService {
   getLabel(unit: Unit): string;
   getMovement(unit: Unit): Movement;
   getOffense(unit: Unit): Offense;
   getDefense(unit: Unit): Defense;
}