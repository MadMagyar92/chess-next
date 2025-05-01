import { Metadata } from "./metadata";

type AppMetadataConfigItem = {
   metadata: Metadata;
   path: string;
};

type AppDataConfigItem = {
   data: Data;
   path: string;
};

type AppMetadataConfigCollection = AppMetadataConfigItem[];
type AppDataConfigCollection = AppDataConfigItem[];

export type IAppConfig = {
   name: string;
   configs: AppMetadataConfigCollection;
   data: AppDataConfigCollection;
};