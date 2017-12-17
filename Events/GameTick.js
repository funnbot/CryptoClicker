module.exports =
  async function Tick(bot) {
    for (let id of Object.keys(bot.Database.user)) {
      const user = await bot.users.fetch(id)
      if (user.bot) continue
      if (user.presence.status !== "online") continue
      let add = user.produceAmount
      if (bot.mined[id] !== undefined) add += user.mineAmount + bot.mined[id]
      if (add) user.mine(add)
    }
    bot.mined = {}
  }