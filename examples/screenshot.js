const carmen = require("../dist/index");
const links = require("./links.json");

const { saveScreenshot } = carmen.missions;

const plan = ["http://google.com", "turdddd", "http://google.com"].map(
  saveScreenshot
);

// const plan = [saveScreenshot("http://google.com")];

carmen.run(plan);
