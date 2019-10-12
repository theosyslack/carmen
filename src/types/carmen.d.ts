import { Page, Browser } from "puppeteer";

export type Sleuth<T> = (config: SleuthConfig) => Promise<T>;

export interface SleuthConfig {
  page: Page;
}

export type Mission = (browser: Browser) => Promise<MissionReport>;
export type MissionFactory = (...args: any[]) => Mission;

export type MissionStatus = "IN QUEUE" | "PENDING" | "SUCCESS" | "FAILURE";
export interface MissionReport {
  status: MissionStatus;
  timestamp: Date;
  name: string;
  path: string;
  result: {
    data?: object;
    error?: string;
  };
}

export interface MissionResult {
  result: {
    data?: object;
    error?: string;
  };
  context?: {};
}
