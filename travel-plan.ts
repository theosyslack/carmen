// import takeScreenshot from "./missions/takeScreenshot";
import find404s from "./src/missions/find404s";

function traveledTo(destination: string) {
  return `traveled to ${destination}`;
}

export default {
  destinations: [
    {
      url: "https://retail.johnsonville.com",
      missions: [find404s, traveledTo]
    }
  ]
};
