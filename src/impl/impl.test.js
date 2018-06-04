const ThingAPI = require('../api/thing-api');
const ThingAPIImpl = require('./impl');

jest.mock('../api/thing-api');

describe('ThingAPIImpl', () => {
  describe('#makeNewThing', () => {
    it('calls ThingAPI.makeThing', () => {
      ThingAPIImpl.makeNewThing();
      expect(ThingAPI).toBeCalled();

      const ThingAPIInstance = ThingAPI.mock.instances[0];
      expect(ThingAPIInstance.makeThing).toHaveBeenCalledTimes(1);
    });
  });
});
