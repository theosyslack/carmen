import { Page } from "puppeteer";
import * as missions from "./missions";

declare type Mission = (page: Page) => any;
declare type Destination = {
  url: string;
  missions: string[];
};

declare type TravelPlan = Destination[];
