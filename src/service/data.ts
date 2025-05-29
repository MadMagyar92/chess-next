import { DataKey } from '../api';
import { App, AppDataItem } from '../schema';

// TODO: implement generic schema for T type
export type DataService = {
   key: DataKey;
   data: any;
};

async function resolveAppData({ data }: App): Promise<AppDataItem[]> {
   if (typeof data == 'string') {
      return await fetch(data).then(response => response.json(), () => []);
   } else if (Array.isArray(data)) {
      return Promise.resolve(data);
   }
   return Promise.reject(new Error(`App data must be a string or AppDataItem[]`));
}

export async function initDataService(app: App, dataKey: DataKey): Promise<DataService> {
   return await resolveAppData(app).then(configs => {
      const dataItem = configs.filter(({ key }) => key == dataKey);
      if (dataItem.length == 0) {
         throw new Error(`Config not found: ${dataKey}`);
      } else if (dataItem.length > 1) {
         throw new Error(`Multiple configs found: ${dataKey}`);
      }
   
      const { path } = dataItem[0];
      return {
         key: dataKey,
         data: fetch(path).then(response => response.json())
      }
   });
}