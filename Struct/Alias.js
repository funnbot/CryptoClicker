class Alias {
  constructor(commands) {
    this.aliases = {}
    this.mapDefaults(commands)
  }

  mapDefaults(commands) {
    Object.keys(commands).forEach(c => {
      commands[c].alias.forEach(a => {
        this.aliases[a] = c
      })
    })
  }

  run(message) {
    return this.aliases[message.command] || message.command
  }

}

module.exports = Alias