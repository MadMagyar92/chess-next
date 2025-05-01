import { ITerrainMetadataService } from './api/service-metadata';
import { GameService } from './game';
import { CaptureConfig, Metadata, Terrain, TerrainMetadata, UnitMetadata } from './schema';
import { GameTemplateService } from './template';

const metadataMap = [
   {
      metadata: Metadata.TERRAIN, 
      config: getConfig()
   },
   {
      metadata: Metadata.UNIT, 
      config: getConfig()
   },
];

interface IConfigService {
   terrain(): ITerrainMetadataService;
   capture(): CaptureService;
   unit(): UnitService;
}

interface IDataService {
   template(): GameTemplateService;
   game(): GameService;
}

interface ICoreService {
   template(): GameTemplateService;
   game(): GameService;
}

export class CoreService implements ICoreService {
   private templateService: GameTemplateService;
   private gameService: GameService;

   constructor() {
      this.templateService = new GameTemplateService([]);
      this.gameService = new GameService([]);
   }

   template(): GameTemplateService {
      return this.templateService;
   }

   game(): GameService {
      return this.gameService;
   }
}

interface ICoreHandler {
   template(): GameTemplateService;
   game(): GameService;
}

export class CoreHandler implements ICoreHandler {
   private moveService: MoveService;

}