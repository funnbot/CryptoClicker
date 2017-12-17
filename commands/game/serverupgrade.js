const Clicker = require("../../Clicker.js")
const {
  dcm,
  dcm_b
} = require("../../config.js")

module.exports = new Clicker.Command({
  help: "Get your mining stats.",
  example: "${p}stats",
  argExample: "none",
  userPerms: 0,
  botPerms: ["EMBED_LINKS"],
  alias: ["statistics"],

  run: async (message, bot, send) => {

  }
})