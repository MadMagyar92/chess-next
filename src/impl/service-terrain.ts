import { ITerrain } from "../api";
import { Metadata, TerrainMetadata } from "../schema";
import { AbstractDataService, AbstractMetadataService } from "./service";

export class TerrainMetadataService  extends AbstractMetadataService<TerrainMetadata> {
   constructor(config: TerrainMetadata) {
      super(Metadata.TERRAIN, config);
   }
}

export class TerrainDataService extends AbstractDataService<ITerrain> {   
   constructor(terrain: ITerrain[]) {
      super(terrain);
   }
}