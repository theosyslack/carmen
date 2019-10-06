const carmen = require("../dist/index");
const links = require("./screenshot.json");

const { saveScreenshot } = carmen.missions;

const plan = links.map(saveScreenshot);

const result = carmen.run(plan);
