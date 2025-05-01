import { Metadata } from "./metadata";

type AppMetadataItem = {
   key: Metadata;
   path: string;
};

export type AppMetadata = {
   name: string;
   configs: AppMetadataItem[];
};