import puppeteer from "puppeteer";
import log, { clear } from "./log";
import { sanitize } from "./file";

let browser;
export default async url => {
  if (!url) throw new Error("No url.");

  const page = await browser.newPage();

  try {
    url = new URL(url);
  } catch (e) {
    log(e, "error");
  }

  const hostname = sanitize(url.hostname);
  const pathname =
    sanitize(url.pathname) !== "-" ? sanitize(url.pathname) : "home";

  await page.goto(url.href, { waitUntil: "networkidle0" });
  await page.screenshot({
    path: "./screenshots/" + hostname + "_" + pathname + ".png",
    fullPage: true
  });

  await page.close();

  // clear();
  // log("success", "success");
  // log("error", "error");
  // log("pending", "pending");
  // log({ name: "table", style: "also table" }, "table");
};

export const loginToMagnolia = async () => {
  const page = await browser.newPage();
  await page.goto("http://localhost:8080/local/");
  await page.type("#login-username", "superuser");
  await page.type("#login-password", "superuser");
  await page.click("#login-button");
  await page.waitForNavigation();
  await page.close();
};

export const initialize = async () => {
  log("Carmen is launching her browser.", "pending");
  browser = await puppeteer.launch({
    userDataDir: "./user-data"
    // devtools: true
  });
  log("Browser launched.", "success");
  return browser;
};
