const Clicker = require("../../Clicker.js")
const {
  dcm,
  dcm_b,
  PRODUCERS,
  PRODUCERS_keys
} = require("../../config.js")

module.exports = new Clicker.Command({
  help: "Get your mining stats.",
  example: "${p}stats",
  argExample: "none",
  userPerms: 0,
  botPerms: ["EMBED_LINKS"],
  alias: ["statistics"],
  args: [{
    prompt: "A user to check the statistics of.",
    type: "user",
    optional: true
  }],

  run: async (message, bot, send) => {
    const user = message.args[0] || message.author
    const owns = user.mined
    const totalMined = owns + user.sold
    const hr = user.produceAmount

    let embed = new bot.Embed()
    embed.setAuthor(user.tag, user.displayAvatarURL())
      .setTitle(`Account Balance: ${dcm_b}${owns}`)
      .addField("Total Mined", dcm_b + totalMined, true)
      .addField("Hash Rate", `${dcm_b}${hr}/s`, true)
      .addField("Hardware", PRODUCERS_keys.map(k => `${PRODUCERS[k][2]} - ${user[k]}`).join("\n"))
    send(embed)
  }
})