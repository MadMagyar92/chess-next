import { ConfigKey } from '../api';
import { AppConfig } from '../schema';

// TODO: implement generic schema for T type
export type IConfigService = {
   key: ConfigKey;
   config: any;
};

export function initConfigService(configKey: ConfigKey, { configs }: AppConfig): IConfigService {
   const config = configs.filter(({ key }) => key == configKey);
   if (config.length == 0) {
      throw new Error(`Config not found: ${configKey}`);
   } else if (config.length > 1) {
      throw new Error(`Multiple configs found: ${configKey}`);
   }

   const { path } = config[0];
   return {
      key: configKey,
      config: fetch(path).then(response => response.json())
   }
}