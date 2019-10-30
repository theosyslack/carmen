import { Page, Browser, LaunchOptions } from "puppeteer";
import { PathLike } from "fs";
import { EventEmitter } from "events";

declare namespace Carmen {
  export type run = Runner;
  export type missions = MissionConfigCollection;
  export type version = string;
  export type events = EventEmitter;
}
export type Runner = (
  configs: MissionConfig<any>[],
  options: RunOptions
) => Promise<MissionReport<any>[]>;

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
  read: () => Promise<Partial<T> | T>;
  update: (update: Partial<T>) => Promise<Partial<T> | T>;
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
export interface MissionReport<T> {
  timestamp: Date;
  status: MissionReportStatus;
  config: MissionConfig<T>;
  payload?: T | Error;
  context?: object;
  error?: string;
}
export type Mission<T> = (
  payload: MissionPayload<T>
) => Promise<MissionResult<T>>;
export type MissionResult<T> = T;
export type RunnableMission<T> = Runnable<Promise<MissionReport<T>>>;
export type MissionCreator<T> = Creator<MissionConfig<T>, Promise<Mission<T>>>;

export interface MissionConfig<T> {
  name: string;
  path: string;
  url?: string;
  mission: Mission<T>;
}
export interface MissionPayload<T> extends MissionConfig<T> {
  browser: Browser;
  page: Page;
  log: LoggerWithType;
  events: EventEmitter;
  report: FileConnection<MissionReport<T>>;
}

export interface MissionConfigCollection {
  [name: string]: (...args: any[]) => MissionConfig<any>;
}

export type Sleuth<T> = (config: SleuthConfig) => Promise<T>;
export interface SleuthConfig {
  page: Page;
}

export type SleuthCreator<T> = Creator<SleuthConfig, Sleuth<T>>;
