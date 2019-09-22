import { Page, Browser } from "puppeteer";
import { Url } from "url";
import { URLLike } from "./common/utilities";

// Type definitions for carmen
// Project: carmen

declare global {
  export type Mission = (
    page: Page,
    browser?: Browser,
    history?: MissionResult[]
  ) => Promise<MissionResult>;

  export type MissionResultStatus = "SUCCESS" | "FAILURE" | "PENDING";

  export interface MissionResult {
    status: MissionResultStatus;
    mission: Mission;
    url: URL;
    message: string;
    payload: object;
  }

  export interface Destination {
    url: string;
    missions: Mission[];
  }

  export interface TravelPlan {
    destinations: Destination[];
  }
}

export {};
