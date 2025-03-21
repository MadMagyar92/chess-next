import { Terrain } from "../../schema";

export interface ITerrainMetadataService {
   getLabel(terrain: Terrain): string;
}
