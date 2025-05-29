import { ConfigKey } from '../api';
import { App, AppConfigItem } from '../schema';

// TODO: implement generic schema for T type
export type ConfigService = {
   key: ConfigKey;
   config: any;
};

async function resolveAppConfig({ config }: App): Promise<AppConfigItem[]> {
   if (typeof config == 'string') {
      return await fetch(config).then(response => response.json(), () => []);
   } else if (Array.isArray(config)) {
      return Promise.resolve(config);
   }
   return Promise.reject(new Error(`App config must be a string or AppConfigItem[]`));
}

export async function initConfigService(app: App, configKey: ConfigKey): Promise<ConfigService> {
   return await resolveAppConfig(app).then(configs => {
      const configItem = configs.filter(({ key }) => key == configKey);
      if (configItem.length == 0) {
         throw new Error(`Config not found: ${configKey}`);
      } else if (configItem.length > 1) {
         throw new Error(`Multiple configs found: ${configKey}`);
      }
   
      const { path } = configItem[0];
      return {
         key: configKey,
         config: fetch(path).then(response => response.json())
      }
   });
}