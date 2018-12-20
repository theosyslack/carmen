import { sendSleuth } from "./actions/sleuth";
(<any>Symbol).asyncIterator =
  Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");

(async function() {
  const missions: any[] = [
    function(destination: string) {
      return `traveled to ${destination}`;
    }
  ];

  const destination: string = "http://localhost";

  const results = sendSleuth(missions, destination);

  for await (const result of results) {
    console.log(result);
  }
})();
