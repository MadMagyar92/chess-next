import { Id, IData } from "../../schema";

export interface IDataService<T extends IData> {
   create(obj: T): Id;
   read(id: Id): T | undefined;
   update(obj: T): T | undefined;
   delete(id: Id): T | undefined;
   close(): T[];
}