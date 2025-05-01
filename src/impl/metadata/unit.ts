import { Metadata, MovementMetadataType, UnitMetadataConfig, UnitMetadataType } from "../../schema";
import { IMetadataService } from '../../api';

export class UnitMetadataService implements IMetadataService<UnitMetadataConfig> {
   type = Metadata.UNIT;
   config: UnitMetadataConfig;

   constructor(config: UnitMetadataConfig) {
      this.config = config;
   }

   getLabel(unit: UnitMetadataType): string {
      const { label } = this.config.filter(({id}) => id == unit)[0];
      return label;
   }

   getMovement(unit: UnitMetadataType): MovementMetadataType {
      const { movement } = this.config.filter(({id}) => id == unit)[0];
      return movement;
   }
}