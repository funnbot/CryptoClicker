const Clicker = require("../../Clicker.js");
const {dcm, dcm_b} = require("../../config.js");

module.exports = new Clicker.Command({
    help: "Get your balance",
    example: "${p}balance || ${p}balance @user",
    argExample: "none",
    userPerms: 0,
    alias: ["bal", "discordium"],
    args: [{
        prompt: "Check the balance of another user.",
        type: "user",
        optional: true
    }],
    dm: true,

    run: async (message, bot, send) => {
        const user = message.args[0] || message.author;
        if (!user.mined) return send(``);
        return send(`${user.username}\s account balance${dcm}${user.mined}`);
    }
});