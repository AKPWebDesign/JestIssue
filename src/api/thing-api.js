class ThingAPI {
  constructor(opts = {}) {
    this.opts = opts;
  }

  makeThing() {
    return 'A thing!';
  }
}

module.exports = ThingAPI;
