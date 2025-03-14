enum SystemCapture {
   XPT = '@capture/xpt',    // checkpoint
   BAS = '@capture/bas',    // base
   HQT = '@capture/hqt'     // headquarters
}

type CustomCapture = string;

export type Capture = SystemCapture | CustomCapture;

class CaptureConfigItem {
   private id: Capture;
   private label: string;
}

export type CaptureConfig = CaptureConfigItem[];