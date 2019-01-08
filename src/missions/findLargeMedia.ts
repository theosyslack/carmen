import * as puppeteer from "puppeteer";

const sizeLimit = 2000000;

export default async (page: puppeteer.Page) => {
  return page.on("response", response => {
    let resourceType = response.request().resourceType();
    if (resourceType == "image" || resourceType == "media") {
      let contentLength = parseInt(response.headers()["content-length"], 10);
      if (typeof contentLength != "undefined" && contentLength >= sizeLimit) {
        console.error(contentLength + " :: " + response.url());
      }
    }
  });
};
