import { InstanceKey } from '../../api';
import { AppConfig } from '../../schema';

type AppInstanceItem = {
   key: InstanceKey;
   path: string;
};

export type AppInstance = {
   name: string;
   config: AppConfig;
   instances: AppInstanceItem[];
};