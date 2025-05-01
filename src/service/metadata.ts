import { AppMetadata, MetadataEntry } from "../schema";

// TODO: implement generic schema for T type
export type IMetadataService = {
   entry: MetadataEntry;
   config: any;
};

export function initService(entry: MetadataEntry, app: AppMetadata): IMetadataService {
   const { key } = entry;
   const { configs } = app;
   const found = configs.filter(config => config.key == key);
   if (found.length == 0) {
      throw new Error(`Metadata config not found: ${key}`);
   }

   const { path } = found[0];
   const config = fetch(path).then(response => response.json());

   return {
      entry,
      config
   }
}