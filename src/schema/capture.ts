export enum Capture {
   XPT = '@capture/xpt',    // checkpoint
   BAS = '@capture/bas',    // base
   HQT = '@capture/hqt'     // headquarters
}

export class CaptureConfigItem {
   id: Capture;
   label: string;
}

export type CaptureConfig = CaptureConfigItem[];