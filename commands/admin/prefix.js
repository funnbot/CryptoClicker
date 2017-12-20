const Clicker = require("../../Clicker.js");

module.exports = new Clicker.Command({
  help: "Set the prefix.",
  example: "${p}prefix ! || ${p}prefix \"click, \"",
  argExample: "<newPrefix>",
  userPerms: 1,
  alias: ["setprefix"],

  run: async (message, bot, send, t) => {
      if (!message.checkSuffix) return send("**Set the character before commands, to include a space wrap the prefix in double quotes");
      let pre = message.suffix.replace(/[’”‘“]/g, "\"");
      if (pre) {
      }
  }
});