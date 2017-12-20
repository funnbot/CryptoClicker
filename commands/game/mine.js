const Clicker = require("../../Clicker.js");
const {
    dcm,
    dcm_b
} = require("../../config.js");

module.exports = new Clicker.Command({
    help: "Start mining Discordium.",
    example: "${p}click",
    argExample: "",
    userPerms: 0,
    coolDown: 20,
    dm: true,

    run: async (message, bot, send) => {
        if (message.author.mined) return send("You now earn Discordium when you send messages.")
            .then(async m => {
                await timeout(5000);
                m.delete()
            });
        const txt = `
    **Welcome to __CryptoClicker__, you have mined your first Discordium!**
    *You don't need to use this command anymore, discordium is now earned by sending messages*
    Use \`{p}hardware\` to buy mining hardware, and \`{p}upgrades\` to buy mining upgrades.
    Mining hardware continues to mine even if you are not sending messages, but you still need to be online.
    You can also buy upgrades that benefit the entire server with \`{p}serverupgrades\`
    When you talk in servers with upgrades, you get a boosted mining rate.
    Your discordium goes everywhere with you, and every message you send earns you more!
    Compete with your friends on the \`{p}leaderboard\` and try to get to the top!
    **You only earn Discordium when online**
    `.unindent().replace(/\{p\}/g, message.prefix);
        send(txt);
        message.author.mine()
    }
});