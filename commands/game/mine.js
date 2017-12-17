const Clicker = require("../../Clicker.js")
const {
  dcm,
  dcm_b
} = require("../../config.js")

module.exports = new Clicker.Command({
  help: "Start mining Discordium.",
  example: "${p}click",
  argExample: "",
  userPerms: 0,
  coolDown: 20,

  run: async (message, bot, send) => {
    if (message.author.mined) return message.author.mine(), send("You mined 1 Discordium")
      .then(async m => {
        await timeout(5000)
        m.delete()
      })
    const txt = `
    **Welcome to __CryptoClicker__, you have mined your first Discordium!**
    You can now use all game related commands.
    Use \`{p}hardware\` to buy mining hardware, and \`{p}upgrades\` to buy mining upgrades.
    You can also buy upgrades that benefit the entire server with \`{p}serverupgrades\`
    When you talk in servers with upgrades, you get a boosted mining rate.
    Your discordium goes everywhere with you, and every message you send earns you more!
    Compete with your friends on the \`{p}leaderboard\` and try to get to the top!
    `.unindent().replace(/\{p\}/g, message.prefix)
    send(txt)
    message.author.mine()
  }
})