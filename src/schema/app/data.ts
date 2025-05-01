export type Id = number;

export type IData = {
   id: Id;
};

export type IDataService<T extends IData> = {
   data: T[];
}