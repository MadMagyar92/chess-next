import { App, Metadata, DEFAULT, AppItem } from '../api';

export class AppLoader {
   path: string;
   getDefaults(): Metadata<any>[] {
      return DEFAULT;
   }
   getApp(): App {
      return JSON.parse(require('fs').readFileSync('./app.json', 'utf8'));
   }
   getOverrides(): AppItem[] {
      const { config, data }: App = this.getApp();
      return [ ...config, ...data ];
   }
   main() {
      const overrides: AppItem[] = this.getOverrides();
      this.getDefaults().map(metadata => {
         const override: AppItem = overrides.find(({ key }) => key == metadata.getKey());
         if (!override) {
            return metadata;
         }

         const { type, name } = metadata;
         const { path } = override;
         return new Metadata(type, name, path);
      });
   }
}