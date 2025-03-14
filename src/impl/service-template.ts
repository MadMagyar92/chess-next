import { IGameTemplate, IService, Id } from '../api';

export class GameTemplateService implements IService<IGameTemplate> {
   private templates: IGameTemplate[];
   
   constructor(templates: IGameTemplate[]) {
      this.templates = templates;
   }

   getAll(): IGameTemplate[] {
      return this.templates;
   }

   get(id: Id): IGameTemplate | undefined {
      const result: IGameTemplate[] = this.templates.filter(g => g.getId() == id);
      return result.length == 1 ? result[0] : undefined;
   }

   create(template: IGameTemplate): Id {
      this.templates.push(template);
      return template.getId();
   }

   post(template: IGameTemplate): IGameTemplate | undefined {
      return template;
   }

   delete(id: number): IGameTemplate | undefined {
      return this.get(id);
   }
}