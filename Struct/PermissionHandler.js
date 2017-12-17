const {PERMISSIONS, FUNNBOT} = require("../config.js")

const hasPerm = false
const noPerm = true

const perms = [
  "User",
  "Admin",
  "Dev"
]

class PermissionHandler {
  user(message, bot, perm = 2) {
    if (message.author.id === FUNNBOT) return hasPerm
    if (perm === 2) return noPerm
    if (perm === 0) return hasPerm
    if (!message.guild) return hasPerm
    if (perm !== 2 && message.author.id === message.guild.ownerID) return hasPerm
    let hasAdmin = message.member.roles.find("name", "Admin")
    if (perm === 1 && has.admin) return hasPerm
    message.channel.send("**This command requires you to have a role named `" + perms[perm] + "`**")
    return noPerm
  }

  bot(message, bot, perms = []) {
    let not = []
    perms.forEach(p => {
      if (!message.channel.permissionsFor(bot.user).has(p)) {
        not.push(p)
      }
    })

    if (not.length > 0) {
      let s = not.length > 1 ? "s" : ""
      not = not.map(p => PERMISSIONS[p])
      message.send("I (ClickerBot) lack the permission" + s + ": `" + not.join("`, `") + "`")
      return true
    } else return false
  }
}

module.exports = PermissionHandler