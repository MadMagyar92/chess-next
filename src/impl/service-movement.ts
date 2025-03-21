import { IMovementMetadataService } from "../api";
import { Metadata, Movement, MovementMetadata, Terrain } from "../schema";
import { AbstractMetadataService } from "./service";

export class MovementMetadataService extends AbstractMetadataService<MovementMetadata> implements IMovementMetadataService {
   constructor(config: MovementMetadata) {
      super(Metadata.MOVEMENT, config);
   }

   getFuelCost(movement: Movement, terra: Terrain): number | undefined {

      // is the movement configured?
      const configs = this.getConfig().filter(({id}) => id == movement);
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