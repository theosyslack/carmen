import { Page } from "puppeteer";

declare type Mission = (page: Page) => null;
declare type Destination = {
  url: string;
  missions: Mission[];
};

declare type TravelPlan = {
  destinations: Destination[];
};
