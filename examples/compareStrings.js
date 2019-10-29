const carmen = require("../dist/index");

const { compareStrings } = carmen.missions;

const plan = [
  compareStrings({
    urls: ["https://www.jabil.com", "https://us.jabil.crescendo.io"]
  }),
  compareStrings({
    urls: [
      "https://www.jabil.com/solutions/by-industry/consumer/appliances.html",
      "https://us.jabil.crescendo.io/solutions/by-industry/consumer/appliances.html"
    ]
  })
];

(async () => {
  const results = await carmen.run(plan);
})();
