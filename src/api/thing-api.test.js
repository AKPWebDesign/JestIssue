const ThingAPI = require('./thing-api');

describe('ThingAPI', () => {
  describe('#makeThing', () => {
    it('should return "A thing!"', () => {
      const thingApi = new ThingAPI();
      const thing = thingApi.makeThing();

      expect(thing).toEqual('A thing!');
    });
  });
});
