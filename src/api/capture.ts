import { CaptureConfig } from "../schema";
import { IStoreable } from "./storeable";

export interface ICapture extends IStoreable {
   getConfig(): CaptureConfig;
   getTeam(): number;
}