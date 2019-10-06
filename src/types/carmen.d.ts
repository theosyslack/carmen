import { Page } from "puppeteer";

export type Sleuth<T> = (config: SleuthConfig) => Promise<T>;

export interface SleuthConfig {
  page: Page;
}

export type Mission = () => Promise<MissionReport>;
export type MissionFactory = (...args: any[]) => Mission;

export type MissionStatus = "IN QUEUE" | "PENDING" | "SUCCESS" | "FAILURE";
export interface MissionReport {
  status: MissionStatus;
  timestamp: Date;
  name: string;
  result: {
    error?: string;
  };
}

export type MissionResult = object;

export type TravelPlan = {
  urls: URL[];
  missions: Mission[];
};
