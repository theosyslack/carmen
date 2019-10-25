import { Page, Browser, LaunchOptions } from "puppeteer";
import { PathLike } from "fs";
import { EventEmitter } from "events";


declare namespace Carmen {
  export type run = Runner;
  export type missions = MissionConfigCollection;
  export type version = string;
  export type events = EventEmitter;
}
export type Runner = (configs: MissionConfig[], options: RunOptions) => Promise<MissionReport[]>

// ////////
//
// Generics
//
// ////////
export type Creator<T, U> = (config: T | Partial<T>) => U | Creator<T, U>;
export type Runnable<T> = () => T;

export type LogType =
  | "default"
  | "table"
  | "success"
  | "pending"
  | "error"
  | "info"
  | "warning";

export type Logger = (message: string) => void;
export type LoggerWithType = (message: string, type?: LogType) => void;
export type LogCollection = {
  [type in LogType]: Logger;
};


export interface FileConnection<T> {
  path: PathLike;
  dir: string;
  name: string;
  exists: () => Promise<boolean>;
  read: () => Promise<object>;
  update: (update: Partial<T>) => Promise<Partial<T>>;
  create: (name: string, data: object) => Promise<void>;
}

export interface RunOptions {
  launchOptions?: LaunchOptions;
}




// ////////
//
// Missions
//
// ////////
export type MissionReportStatus =
  | "IN QUEUE"
  | "PENDING"
  | "SUCCESS"
  | "FAILURE"
  | "ERROR";
export interface MissionReport {
  timestamp: Date;
  status: MissionReportStatus;
  config: MissionConfig;
  payload?: object;
  context?: object;
  error?: string;
}
export type Mission = (payload: MissionPayload) => Promise<MissionResult>;
export type MissionResult = any;
export type RunnableMission = Runnable<Promise<MissionReport>>;
export type MissionCreator = Creator<MissionConfig, Promise<Mission>>;

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
  events: EventEmitter;
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
