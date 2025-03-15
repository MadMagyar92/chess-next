import { IGameTemplate, ITerrainGrid } from '../api';
import { CoreService } from '../core-service';
import { Terrain } from '../schema';

const templateMappings = [
   {
      path: '/api/template',
      service: getMapsApi(coreService)
   },
   {
      path: '/api/template/:templateId',
      service: getMapApi(coreService)
   },
   {
      path: '/api/template/:templateId/terrain/:x/:y',
      service: getTerrainFromMapApi(coreService)
   },
   {
      path: '/api/game/:gameId/unit/:x/:y/moves',
      service: getMovesForUnitFromGameApi(coreService)
   }
];

export function getTemplatesApi(coreService: CoreService) {
   return (req, res) => {
      res.send(coreService.map().getAll());
   }
}

export function getTemplateApi(coreService: CoreService) {
   return (req, res) => {
      const { params: { mapId }} = req;
      const map: ITerrainGrid = coreService.map().get(mapId);
      if (!map) {
         res.sendStatus(404);
      }
      res.send(map);
   }
}

export function getTerrainFromTemplateApi(coreService: CoreService) {
   return (req, res) => {
      const { params: { mapId, x, y }} = req;
      const map: IGameTemplate = coreService.map().get(mapId);
      if (!map) {
         res.sendStatus(404);
      }
      const terrain: Terrain = map.get(x, y);
      if (!terrain) {
         res.sendStatus(404);
      }
      res.send(terrain);
   }
}