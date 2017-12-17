const Clicker = require("../../Clicker.js")
const {
  dcm,
  PRODUCERS_keys,
  PRODUCERS
} = require("../../config.js")

module.exports = new Clicker.Command({
  help: "Buy mining hardware to increase production per second.",
  example: "${p}hardware",
  argExample: "none",
  userPerms: 0,
  botPerms: ["EMBED_LINKS"],
  alias: ["buy", "producers"],

  run: async (message, bot, send) => {
    let embed = new bot.Embed()
  }
})