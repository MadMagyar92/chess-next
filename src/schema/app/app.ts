import { Metadata } from "./metadata";

export type AppMetadataConfigItem = {
   metadata: Metadata;
   path: string;
};

export type AppMetadataConfig = AppMetadataConfigItem[];

export type AppConfig = {
   name: string;
   configs: AppMetadataConfig;
};