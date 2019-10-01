import { Page, Browser } from "puppeteer";
// Type definitions for carmen
// Project: carmen

declare namespace carmen {
  interface helpers {
    writeReport: (
      reportType: string,
      content: string | object,
      filePath?: string
    ) => Promise<void>;
    createReportWriter: (
      reportType: string,
      filePath?: string
    ) => (content: any) => Promise<void>;
    createFolderPathFromUrl: (url: any) => any;
    getContentsAsObject: (path: any) => Promise<object>;
  }

  const missions: MissionCollection;
}

declare global {
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
}
