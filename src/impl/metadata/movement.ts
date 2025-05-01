import { MovementMetadataConfig, MovementMetadataType, TerrainMetadataType } from "../../schema";
import { IMetadataService, Metadata } from "../../schema/app/metadata";

export class MovementMetadataService implements IMetadataService<MovementMetadataConfig> {
   type = Metadata.MOVEMENT;
   config: MovementMetadataConfig;

   constructor(config: MovementMetadataConfig) {
      this.config = config;
   }

   getFuelCost(movement: MovementMetadataType, terra: TerrainMetadataType): number | undefined {

      // is the movement configured?
      const configs = this.config.filter(({id}) => id == movement);
      if (configs.length == 0) {
         return undefined;
      }

      // is the terrain assigned a cost?
      const { config } = configs[0];
      const costs = config.filter(({terrain}) => terrain == terra);
      if (costs.length == 0) {
         return undefined;
      }

      const { fuel } = costs[0];
      return fuel;
   }
}