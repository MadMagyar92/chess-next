import { Id, IStoreable } from "./storeable";

export interface IService<T extends IStoreable> {
   getAll(): T[];
   get(id: Id): T | undefined;
   create(obj: T): Id;
   post(obj: T): T | undefined;
   delete(id: Id): T | undefined;
}