const destinations = ["http://google.com/", "http://twitter.com/"];

const missions = {
  beforeAll: ({url}) => {
    updateTravelLog(`Traveling to ${url}`);
  },
  afterAll: async ({ url }, page) => {
    takeScreenshot();
  }
};

const moments = ['master', 'develop', '9ae64ea'];

export default {
  destinations,
  missions
  moments
};
