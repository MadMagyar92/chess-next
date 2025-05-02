import { InstanceKey } from '../api';
import { AppInstance } from '../schema';

// TODO: implement generic schema for T type
export type IInstanceService = {
   key: InstanceKey;
   instances: any;
};

export function initInstanceService(instanceKey: InstanceKey, { instances }: AppInstance): IInstanceService {
   const instance = instances.filter(({ key }) => key == instanceKey);
   if (instance.length == 0) {
      throw new Error(`Instances not found: ${instanceKey}`);
   } else if (instance.length > 1) {
      throw new Error(`Multiple instances found: ${instanceKey}`);
   }

   const { path } = instance[0];
   return {
      key: instanceKey,
      instances: fetch(path).then(response => response.json())
   }
}