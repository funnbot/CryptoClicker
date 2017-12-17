const Database = require("./Struct/Database/index.js")
const ClickerClient = require("./Struct/ClickerClient.js")
const MessageHandler = require("./Struct/MessageHandler.js")
const MessageCreate = require("./Events/MessageCreate.js")
const GameTick = require("./Events/GameTick.js")
const Command = require("./Struct/Command.js")
const config = require("./config.js")

require("./Struct/Logger.js")

module.exports = {
  Database,
  ClickerClient,
  MessageHandler,
  MessageCreate,
  GameTick,
  Command,
  config
}