import { Id, ITerrain, Metadata } from "../../schema";

export class TerrainImpl implements ITerrain {
   type = Metadata.TERRAIN;
   id: Id;
   x: number;
   y: number;
}