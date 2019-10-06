const carmen = require("../dist/index");
const links = require("./links.json");

const { saveScreenshot } = carmen.missions;

const plan = links.map(saveScreenshot);

carmen.run(plan);
