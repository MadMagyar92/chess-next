import { AppMetadata, Metadata, MetadataKey, MetadataNamespace } from "../schema";

export const METADATA: Metadata[] = [
   {
      key: MetadataKey.DEFENSE,
      namespace: MetadataNamespace.DEFENSE,
   },
   {
      key: MetadataKey.MOVEMENT,
      namespace: MetadataNamespace.MOVEMENT,
   },
   {
      key: MetadataKey.OFFENSE,
      namespace: MetadataNamespace.OFFENSE,
   },
   {
      key: MetadataKey.TERRAIN,
      namespace: MetadataNamespace.TERRAIN,
   },
   {
      key: MetadataKey.UNIT,
      namespace: MetadataNamespace.UNIT,
   },
];

// TODO: implement generic schema for T type
export type IMetadataService = {
   metadata: Metadata;
   config: any;
};

export function initService(app: AppMetadata, metadata: Metadata): IMetadataService {
   const { key } = metadata;
   const { configs } = app;
   const config = configs.filter(config => config?.metadata?.key == key);
   if (config.length == 0) {
      throw new Error(`Metadata config not found: ${key}`);
   } else if (config.length > 1) {
      throw new Error(`Multiple metadata configs found: ${key}`);
   }

   const { path } = config[0];
   return {
      metadata,
      config: fetch(path).then(response => response.json())
   }
}