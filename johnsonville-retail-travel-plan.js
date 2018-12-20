const destinations = [
  {
    url: "http://retail.johnsonville.com",
    missions: [
      "takeScreenshot",
      async page => {
        const title = await page.title();
        console.log(title);
      }
    ]
  }
];

export default {
  destinations
};
