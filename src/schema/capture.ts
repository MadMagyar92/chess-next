enum SystemCapture {
   XPT = '@capture/xpt',    // checkpoint
   BAS = '@capture/bas',    // base
   HQT = '@capture/hqt'     // headquarters
}

type CustomCapture = string;

export type Capture = SystemCapture | CustomCapture;

export class CaptureConfig {
   private id: Capture;
   private label: string;
}