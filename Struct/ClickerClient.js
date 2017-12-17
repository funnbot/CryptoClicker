global.Promise = require("bluebird")
global.logger = require("./Logger.js")

const Discord = require("discord.js")
const CommandLoader = require("./CommandLoader.js")
const config = require("../config.js")

//Database
const Database = require("./Database/index.js")
const User = require("./Database/User.js")
const Guild = require("./Database/Guild.js")

Guild.extend(Discord.Guild)
User.extend(Discord.User)
//Database

//Extensions
const Message = require("../Extensions/Message.js")
const MessageEmbed = require("../Extensions/MessageEmbed.js")
require("../Extensions/NativeExtensions.js")

Message.extend(Discord.Message)
MessageEmbed.extend(Discord.MessageEmbed)

//Extensions

class ClickerClient extends Discord.Client {
  constructor(...args) {
    super(...args)
    this.Database = new Database()
    this.mined = {}
    this.CommandLoader = new CommandLoader()
    this.SimpleStorage = {
      user: {}
    }
    this.commands = this.CommandLoader.load()
    this.Embed = Discord.MessageEmbed
    this.initTime = Date.now()
    this.unhandledRejection()
    this.on("ready", () => {

    })
  }

  async init() {
    await this.Database.formatDb()
    await this.Database.load()
    this.login(config.TOKEN)
    return this
  }

  unhandledRejection() {
    process.on("unhandledRejection", console.log)
  }
}

module.exports = ClickerClient