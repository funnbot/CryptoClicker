const Clicker = require("../../Clicker.js");
const {dcm, PRODUCERS_keys, PRODUCERS, PRICE_SCALE, NUMBERS} = require("../../config.js");

module.exports = new Clicker.Command({
    help: "Buy mining hardware to increase production per second.",
    example: "${p}hardware",
    argExample: "none",
    userPerms: 0,
    botPerms: ["EMBED_LINKS", "ADD_REACTIONS"],
    alias: ["buy", "producers"],

    run: async (message, bot, send) => {
        const user = message.author;
        const embed = new bot.Embed();
        embed.setAuthor(user.tag, user.displayAvatarURL())
            .setTitle("Buy Hardware");
        let prods = [];
        let item = 1;
        for (let prod of PRODUCERS_keys) {
            prods.push(`${NUMBERS[item]}**${PRODUCERS[prod][2]}**${dcm}${PRICE_SCALE(PRODUCERS[prod][1], user[prod])}\nHashRate: ${PRODUCERS[prod][0]}/s *${PRODUCERS[prod][3]}*`);
            item++
        }
        embed.setDescription(prods.join("\n"));
        send(embed);
    }
});