const Struct = require("./Clicker.js")

const bot = new Struct.ClickerClient({
  disabledEvents: ["TYPING_START"],
  fetchAllMembers: true
}).init()
  .then(bot => {
    module.exports = bot
    const Message = new Struct.MessageHandler(bot)
    Message.on("create", Struct.MessageCreate)
    bot.on("ready", () => {
      ticker(bot)
      game(bot)
    })
  })

async function game(bot) {
  let am = 0
  for (let user of Object.values(bot.Database.user)) {
    am += (user.mined || 0) + (user.sold || 0)
  }
  bot.user.setActivity(`${am} Discordium mined`)
}

async function ticker(bot) {
  Struct.GameTick(bot)
  await timeout(10000)
  ticker(bot)
}