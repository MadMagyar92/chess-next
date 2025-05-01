import { Metadata } from "../metadata";

type AppMetadataItem = {
   metadata: Metadata;
   path: string;
};

export type AppMetadata = {
   name: string;
   configs: AppMetadataItem[];
};