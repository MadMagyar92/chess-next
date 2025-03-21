import { IGameTemplate } from '../api';
import { AbstractDataService } from './service';

export class GameTemplateDataService extends AbstractDataService<IGameTemplate> {
   constructor(templates: IGameTemplate[]) {
      super(templates);
   }
}