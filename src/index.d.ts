import { Page } from "puppeteer";

declare type Mission = (page: Page) => any;
declare type Destination = {
  url: string;
  missions: Mission[];
};

declare type TravelPlan = {
  destinations: Destination[];
};
