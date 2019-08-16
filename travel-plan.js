// Available Missions
// find404s
// findLargeMedia
// getPageSize
// takeScreenshot

async function logPageTitle(page) {
  console.log(`Page title: ${await page.title()}`);
}

module.exports = {
  destinations: [
    {
      url: "http://google.com",
      missions: ["getPageSize", "takeScreenshot", logPageTitle]
    }
  ]
};
