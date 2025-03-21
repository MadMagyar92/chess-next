import { Movement, Terrain } from "../../schema";

export interface IMovementMetadataService {
   getFuelCost(movement: Movement, terrain: Terrain): number | undefined;
}