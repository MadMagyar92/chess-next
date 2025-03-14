import { IGameTemplate } from '../api';
import { CoreService } from '../core-service';
import { Terrain } from '../schema';

export function getMapsApi(coreService: CoreService) {
   return (req, res) => {
      res.send(coreService.map().getAll());
   }
}

export function getMapApi(coreService: CoreService) {
   return (req, res) => {
      const { params: { mapId }} = req;
      const map: ITerrainGrid = coreService.map().get(mapId);
      if (!map) {
         res.sendStatus(404);
      }
      res.send(map);
   }
}

export function getTerrainFromMapApi(coreService: CoreService) {
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