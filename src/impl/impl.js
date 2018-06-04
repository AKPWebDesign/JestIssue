const ThingAPI = require('../api/thing-api');

const thingApi = new ThingAPI();

const makeNewThing = () => thingApi.makeThing();

module.exports = {
  makeNewThing,
};
