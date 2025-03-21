import { Id, IDataService, IConfigService, IData } from '../api';
import { IConfig, Metadata } from '../schema';

export abstract class AbstractMetadataService<T extends IConfig> implements IConfigService<T> {
   private type: Metadata;
   private config: T;

   constructor(type: Metadata, config: T) {
      this.type = type;
      this.config = config;
   }
   
   getType(): Metadata {
      return this.type;
   }
   
   getConfig(): T {
      return this.config;
   }
}

export abstract class AbstractDataService<T extends IData> implements IDataService<T> {
   private data: T[];

   constructor(data: T[]) {
      this.data = data;
   }

   load(): T[] {
      throw new Error('Method not implemented.');
   }
   
   save(): T[] {
      throw new Error('Method not implemented.');
   }

   create(obj: T): Id {
      const id = new Date().getTime();
      this.data.push({ getId: () => id, ...obj });
      return id;
   }

   read(id: Id): T | undefined {
      const result: T[] = this.data.filter(g => g.getId() == id);
      return result.length == 1 ? result[0] : undefined;
   }

   update(obj: T): T | undefined {
      const old = this.delete(obj.getId());
      if (old) {
         this.data.push(obj);
      }
      return old;
   }

   delete(id: Id): T | undefined {
      const index = this.data.findIndex((obj) => obj.getId() == id);
      if (index < 0) {
         return undefined;
      }
      return this.data.splice(index, 1)[0];
   }
}