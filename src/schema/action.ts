enum SystemAction {
   ATK = '@action/atk',    // attack
   CAP = '@action/cap'     // capture
}

type CustomAction = string;

export type Action = SystemAction | CustomAction;

export class ActionConfig {
   private type: Action;
   private label: string;
}