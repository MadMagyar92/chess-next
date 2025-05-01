export type Id = number;

export type IData = {
   id: Id;
};

export type IDataService<T extends IData> = {
   data: T[];
};

import { IData, IMetadata, Id } from "../metadata";

export type IPosition = {
   x: number;
   y: number;
};

export type IGrid<T extends IPosition> = IData & {
   gameId: Id;
   sizeX: number;
   sizeY: number;
   grid: T[][];
}

export type IUnit = IData & IMetadata & IPosition & {
   gameId: Id;
   team: number;
   active: boolean;
};

export interface IUnitGrid extends IGrid<IUnit> {

};

export type ITerrain = IData & IMetadata & IPosition & {

};

export interface ITerrainGrid extends IGrid<ITerrain> {

};

export type IGame = IData & {
   terrain: ITerrainGrid;
   units: IUnitGrid;
};

export type IGameTemplate = IData & {
   terrain: ITerrainGrid;
   units: IUnitGrid;
};