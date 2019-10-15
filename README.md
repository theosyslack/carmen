# Carmen 🌐

Carmen will sneak around the web and run scripts for you.

## Installation

1. `yarn install "@theosyslack/carmen"`
2. Create a travel plan, or base it off of one from `examples`.

## Examples

### **Save A Screenshot**

```js
const carmen = require("theosyslack/carmen");

const { saveScreenshot } = carmen.missions;

carmen.run([saveScreenshot({ url: "http://example.com" })]);
```

### Compare Two Screenshots

```js
const carmen = require("theosyslack/carmen");

const { compareScreenshots } = carmen.missions;

carmen.run([
  compareScreenshot({
    urls: [
      "https://github.com/GoogleChrome/puppeteer",
      "https://github.com/theosyslack/carmen"
    ]
  })
]);
```

### Create A Custom Mission

```js
const carmen = require("theosyslack/carmen");

const customMission = {
  name: "Custom Mission",
  path: "./reports/Custom-Mission/",
  url: "http://example.com",

  // Your mission is provided a few helpers = browser, page, log, and report.
  mission: async ({ browser, page, log, report }) => {
    // browser will be a Puppeteer browser that you can use to add new pages, if needed.
    // page will be a Puppeteer page that has navigated to the url provided.
    const title = await page.title();

    // log is a utility to style results in the console.
    log(title); // Example Domain
    log(title, "info"); //    [INFO]     Example Domain
    log(title, "pending"); // [PENDING]  Example Domain
    log(title, "success"); // [SUCCESS]  Example Domain
    log(title, "error"); //   [ERROR]    Example Domain

    // report will be a tool to save and update a json file at the path provided.
    // Defaults to`report.json` if you supply a directory. It can also write siblings
    // easily.
    const updatedReport = await report.update({
      status: "SUCCESS",
      payload: { title }
    });

    await report.create("/title.txt", title); // Will save to ./reports/Custom-Mission/title.txt

    return updatedReport;
  }
};

carmen.run([customMission]);
```
