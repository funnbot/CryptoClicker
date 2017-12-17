const Database = require("./Struct/Database/index.js")
const ClickerClient = require("./Struct/ClickerClient.js")
const MessageHandler = require("./Struct/MessageHandler.js")
const Paginator = require("./Struct/Paginator.js")
const MessageCreate = require("./Events/MessageCreate.js")
const GameTick = require("./Events/GameTick.js")
const Command = require("./Struct/Command.js")
const config = require("./config.js")

module.exports = {
  Database,
  ClickerClient,
  MessageHandler,
  Paginator,
  MessageCreate,
  GameTick,
  Command,
  config
}