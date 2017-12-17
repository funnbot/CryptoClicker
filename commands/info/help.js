const Clicker = require("../../Clicker.js")
const modules = Clicker.config.HELP

module.exports = new Clicker.Command({
  help: "Help",
  example: "${help}",
  argExample: "",
  userPerms: 0,

  run: async (message, bot, send) => {
    let commands = bot.commands
    let groups = bot.CommandLoader.groups
    if (!message.checkSuffix) {
      let fields = []
      for (let [key, cmds] of Object.entries(groups)) {
        let value = Object.entries(groups[key]).map(([k, c]) => `• ${k} - ${(!commands[k]) || commands[k].help}`).join("\n")
        let val = modules[key]
        fields.push({
          name: `${val[0]} - ${val[1]}`,
          value
        })
      }
      let embed = new bot.Embed()
      embed.fields = fields
      embed.setColor(embed.randomColor)
      return send("", {
        embed
      })
    }

    const cmd = message.args[0]

    let c = commands[cmd]
    if (!c) return message.fail("Command not found:", cmd)
    let perms = [
      "User",
      "Admin",
      "Dev"
    ]
    let embed = new bot.Embed()
    embed.setTitle(`\`${cmd}\``)
      .addField("Help: ", c.help)
    c.example ? embed.addField("Example: ", c.example.replace(/\$\{p\}/g, message.prefix)) : 0
    c.argExample ? embed.addField("Arguments: ", c.argExample) : 0
    embed.addField("Permission: ", perms[c.perm])
      .addField("Alias: ", c.alias.length > 0 ? c.alias.join() : "None")
      .setColor(embed.randomColor)
    return send("", {
      embed
    })
  }
})