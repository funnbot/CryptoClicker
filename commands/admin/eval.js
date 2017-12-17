const Clicker = require("../../Clicker.js")

module.exports = new Clicker.Command({
  help: "Eval",
  userPerms: 2,
  alias: [],
  args: [{
    prompt: "Eval what tho.",
    type: "string"
  }],

  run: async (message, bot, send, t) => {
    send(eval(message.suffix).toString())
  }
})