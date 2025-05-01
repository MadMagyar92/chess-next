import { ConfigKey } from "../config";

type AppConfigItem = {
   key: ConfigKey;
   path: string;
};

export type AppConfig = {
   name: string;
   configs: AppConfigItem[];
};