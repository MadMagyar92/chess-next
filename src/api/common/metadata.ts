import { IMetadata, Metadata } from "../../schema";

export interface IMetadataService<T extends IMetadata> {
   getType(): Metadata;
   getConfig(): T;
}