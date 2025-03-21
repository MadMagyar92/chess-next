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
      metadata: Metadata.CAPTURE, 
      config: getConfig()
   },
   {
      metadata: Metadata.UNIT, 
      config: getConfig()
   },
];

interface MService<T> {
   getType(): Metadata;
   getConfig(): T;
}

interface TerrainService extends MService<TerrainMetadata> {
   
}

interface CaptureService extends MService<CaptureConfig> {
   
}

interface UnitService extends MService<UnitMetadata> {
   
}

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