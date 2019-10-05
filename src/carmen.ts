import program from "./initializers/program";
const main = async (): Promise<void> => {
  program.initialize();
};
(async () => {
  await main();
})();
