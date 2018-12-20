export default {
  destinations: [
    {
      url: "not.johnsonville.com",
      missions: [traveledTo]
    },
    {
      url: "nope.johnsonville.com",
      missions: [traveledTo]
    }
  ]
};

function traveledTo(destination: string) {
  return `traveled to ${destination}`;
}
