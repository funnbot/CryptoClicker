const Extension = require("../../Extensions/Extension.js")
const {PREFIX} = require("../../config.js")

class Guild extends Extension {
  static get items() {
    return {
      prefix: PREFIX,
    }
  }

  g(item, def) {
    return this.client.Database.get("guild", this.id, item, def)
  }

  s(item, value) {
    return this.client.Database.set("guild", this.id, item, value)
  }
}

for (let [item, def] of Object.entries(Guild.items)) {
  Object.defineProperty(Guild.prototype, item, {
    get: function () {
      return this.g(item, def)
    },
    set: function (val) {
      this.s(item, val)
    }
  })
}

module.exports = Guild