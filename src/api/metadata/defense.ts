import { Defense, Terrain } from "../../schema";

export interface IDefenseMetadataService {
   getDefense(defense: Defense, terrain: Terrain): number | undefined;
}