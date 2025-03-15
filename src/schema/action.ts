export enum Action {
   ATK = '@action/atk',    // attack
   CAP = '@action/cap'     // capture
}

export class ActionConfigItem {
   type: Action;
   label: string;
}

export type ActionConfig = ActionConfigItem[];