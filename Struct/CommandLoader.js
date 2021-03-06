const {DisabledGroups, DisabledCommands} = require("../config.js")
const fs = require("fs")

class CommandLoader {
  constructor() {
    this.groups = {}
    this.commands = {}

    this.path = "./commands/"
  }

  load() {
    const groups = fs.readdirSync(this.path)
    for (let group of groups) {
      if (DisabledGroups.includes(group)) continue
      const commands = fs.readdirSync(this.path + group)
      for (let command of commands) {
        const name = command.slice(0, -3)
        if (DisabledCommands.includes(name)) continue
        this.groups[group] = this.groups[group] || {}
        try {
          var loaded = require(`.${this.path}${group}/${command}`)
        } catch (e) {
          logger.warn(e)
          continue
        }
        this.commands[name] = loaded
        this.groups[group][name] = true
      }
    }
    return this.commands
  }

  reload(group, command) {
    try {
      delete require.cache[require.resolve(`.${this.path}${group}/${command}`)]
      var loaded = require(`.${this.path}${group}/${command}`)
    } catch (e) {
      logger.warn(e)
      return e
    }
    this.groups[group] = this.groups[group] || {}
    this.groups[group][command] = true
    this.commands[command] = loaded
    logger.info(`Reloaded ${group}/${command}`)
    return null
  }
}

module.exports = CommandLoader