const destinations = [
  {
    url: "not.johnsonville.com",
    missions: [
      "find404s",
      async page => {
        const title = await page.setViewport();
        console.log(title);
      }
    ]
  }
];

export default {
  destinations
};
