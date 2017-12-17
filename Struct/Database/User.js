const Extension = require("../../Extensions/Extension.js")
const Storage = require("../SimpleStorage.js")
const {PRODUCERS, PRODUCERS_keys} = require("../../config.js")

class User extends Extension {
  static get items() {
    return {
      mined: 0,
      sold: 0,
      mineAmount: 1,
      //Producers
      math: 0,
      calc: 0,
      rpi: 0,
      cpu: 0,
      gpu: 0,
      asic: 0,
      cloud: 0,
      farm: 0,
      quantum: 0,
      wumpus: 0,
      //Upgrades
      mineX: 0
    }
  }

  get produceAmount() {
    let result = 0
    for (let prod of PRODUCERS_keys) {
      if (!this[prod]) continue
      result += this[prod] * PRODUCERS[prod][0]
    }
    return result
  }

  get storage() {
    if (!this.Storage) this.Storage = new Storage(this.client, this.id, "user")
    return this.Storage
  }

  buyP(prod, am = 1) {
    if (!PRODUCERS[prod]) logger.err("Invalid Producer: " + prod)
    this[prod] = this[prod] + am
  }

  sell(am = 1) {
    this.mined = this.mined - am
    this.sold = this.sold + am
  }

  mine(am = 1) {
    this.mined = this.mined + am
  }

  g(item, def) {
    return this.client.Database.get("user", this.id, item, def)
  }

  s(item, value) {
    return this.client.Database.set("user", this.id, item, value)
  }
}

for (let [item, def] of Object.entries(User.items)) {
  Object.defineProperty(User.prototype, item, {
    get: function () {
      return this.g(item, def)
    },
    set: function (val) {
      this.s(item, val)
    }
  })
}

module.exports = User