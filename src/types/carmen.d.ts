import { Page, Browser } from "puppeteer";
import { Logger, LogCollection, LoggerWithType } from "../helpers/log";
import { PathLike } from "fs";

// ////////
//
// Generics
//
// ////////
export type Creator<T, U> = (config: T | Partial<T>) => U | Creator<T, U>;
export type Runnable<T> = () => T;

export interface FileConnection<T> {
  path: PathLike;
  dir: string;
  name: string;
  exists: () => Promise<boolean>;
  read: () => Promise<T>;
  update: (update: Partial<T>) => Promise<T>;
  create: (name: string, data: object) => Promise<void>;
}

interface Reportable<T> {
  timestamp: Date;
  status: T;
  config: MissionConfig;
  payload?: object;
  context?: object;
  error?: Error;
}

// ////////
//
// Missions
//
// ////////
export type Mission = (payload: MissionPayload) => Promise<MissionReport>;
export type RunnableMission = Runnable<Promise<MissionReport>>;
export type MissionReport = Reportable<MissionReportStatus>;
export type MissionCreator = Creator<MissionConfig, Promise<Mission>>;
export type MissionReportStatus =
  | "IN QUEUE"
  | "PENDING"
  | "SUCCESS"
  | "FAILURE"
  | "ERROR";

export interface MissionConfig {
  name: string;
  path: string;
  url?: string;
  mission: Mission;
}
export interface MissionPayload extends MissionConfig {
  browser: Browser;
  page: Page;
  log: LoggerWithType;
  report: FileConnection<MissionReport>;
}

export interface MissionConfigCollection {
  [name: string]: (...args: any[]) => MissionConfig;
}

export type Sleuth<T> = (config: SleuthConfig) => Promise<T>;
export interface SleuthConfig {
  page: Page;
}

export type SleuthCreator<T> = Creator<SleuthConfig, Sleuth<T>>;
