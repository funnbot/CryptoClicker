module.exports =
  async function MessageCreate(message) {
    if (message.author.bot) return
    if (!message.client.Database.user[message.author.id]) return
    message.client.mined[message.author.id] = 0
  }