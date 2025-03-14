enum SystemAction {
   ATK = '@action/atk',    // attack
   CAP = '@action/cap'     // capture
}

type CustomAction = string;

export type Action = SystemAction | CustomAction;

class ActionConfigItem {
   private type: Action;
   private label: string;
}

export type ActionConfig = ActionConfigItem[];