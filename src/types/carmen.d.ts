import { Page } from "puppeteer";

export type Sleuth<T> = (config: SleuthConfig) => Promise<T>;

export interface SleuthConfig {
  page: Page;
}

export type Mission = () => Promise<MissionResult>;
export type MissionFactory = (...args: any[]) => Mission;

export type MissionStatus = "IN QUEUE" | "PENDING" | "SUCCESS" | "FAILURE";
export interface MissionResult {
  status: MissionStatus;
  payload?: object;
}

export type TravelPlan = {
  urls: URL[];
  missions: Mission[];
};
