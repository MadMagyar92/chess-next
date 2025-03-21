import { IUnit, IUnitMetadataService } from '../api';
import { Defense, Metadata, Movement, Offense, Unit, UnitMetadata } from '../schema';
import { UnitMetadataItem } from '../schema/metadata/unit';
import { AbstractDataService, AbstractMetadataService } from './service';

export class UnitMetadataService extends AbstractMetadataService<UnitMetadata> implements IUnitMetadataService {
   constructor(config: UnitMetadata) {
      super(Metadata.UNIT, config);
   }

   getMovement(unit: Unit): Movement {
      const { movement } = this.getUnit(unit);
      return movement;
   }

   getOffense(unit: Unit): Offense {
      const { offense } = this.getUnit(unit);
      return offense;
   }

   getDefense(unit: Unit): Defense {
      const { defense } = this.getUnit(unit);
      return defense;
   }

   getUnit(unit: Unit): UnitMetadataItem {
      return this.getConfig().filter(({id}) => id == unit)[0];
   }
}

export class UnitDataService extends AbstractDataService<IUnit> {   
   constructor(units: IUnit[]) {
      super(units);
   }
}