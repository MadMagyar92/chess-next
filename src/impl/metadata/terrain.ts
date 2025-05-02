import { Metadata, TerrainMetadataConfig, TerrainMetadataType } from '../../schema';
import { IMetadataService } from '../../api';

export class TerrainMetadataService implements IMetadataService<TerrainMetadataConfig> {
   type = Metadata.TERRAIN;
   config: TerrainMetadataConfig;

   constructor(config: TerrainMetadataConfig) {
      this.config = config;
   }

   getLabel(terrain: TerrainMetadataType): string {
      const { label } = this.config.filter(({id}) => id == terrain)[0];
      return label;
   }
}