import { Page, Browser } from "puppeteer";

/// <reference types="node" />

export type Mission = (
  page: Page,
  browser?: Browser,
  history?: MissionResult[]
) => Promise<MissionResult | void>;

export type MissionResultStatus = "SUCCESS" | "FAILURE" | "PENDING";

export interface MissionResult {
  status: MissionResultStatus;
  mission: Mission;
  url: URL;
  message: string;
  payload: object;
}

export type MissionName =
  | "find404s"
  | "findLargeMedia"
  | "getHTML"
  | "getLocalLinks"
  | "runLighthouseAudit"
  | "runPerformanceTest"
  | "takeScreenshot";

export type MissionCollection = {
  [name in MissionName]: Mission;
};

export interface Destination {
  url: string;
  missions: Mission[];
}

export interface TravelPlan {
  destinations: Destination[];
}

export type URLLike = URL | string;