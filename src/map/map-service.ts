import { Map } from './map';

interface IMapService {
   getAll(): Map[];
   get(id: number): Map | undefined;
   post(map: Map): Map | undefined;
   delete(id: number): Map | undefined;
}

export class MapService implements IMapService {
   private maps: Map[];
      
   constructor(maps: Map[]) {
      this.maps = maps;
   }

   getAll(): Map[] {
      return this.maps;
   }

   get(id: number): Map | undefined {
      const result: Map[] = this.maps.filter(g => g.id == id);
      return result.length == 1 ? result[0] : undefined;
   }

   post(map: Map): Map | undefined {
      return map;
   }

   delete(id: number): Map | undefined {
      return this.get(id);
   }
}