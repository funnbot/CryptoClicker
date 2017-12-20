const Clicker = require("../../Clicker.js");

module.exports = new Clicker.Command({
    help: "Stop command usage in a channel",
    example: "${p}blacklistchannel || Blacklists the current channel",
    argExample: "none",
    userPerms: ["blacklistchan", "ignorechannel", "ignorechan", "bc"],

    run: async (message, bot, send) => {

    }
});