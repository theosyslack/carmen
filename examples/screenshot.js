const carmen = require("../dist/index");

const { saveScreenshot } = carmen.missions;

const mission = saveScreenshot({ url: "http://example.com" });

const results = carmen.run([mission]);
