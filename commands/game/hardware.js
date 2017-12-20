const Clicker = require("../../Clicker.js");
const {dcm, PRODUCERS_keys, PRODUCERS, PRICE_SCALE, NUMBERS} = require("../../config.js");

module.exports = new Clicker.Command({
    help: "Buy mining hardware to increase production per second.",
    example: "${p}hardware",
    argExample: "none",
    userPerms: 0,
    botPerms: ["EMBED_LINKS", "ADD_REACTIONS"],
    alias: ["buy", "producers"],
    args: [{
        type: "number",
        prompt: "Which hardware would you like to purchase? 1-10",
        min: 1,
        max: 10,
        optional: true
    }],
    dm: true,

    run: async (message, bot, send) => {
        const num = message.args[0] || 1;
        const user = message.author;
        if (!message.checkSuffix) {
            const embed = new bot.Embed();
            embed.setAuthor(user.tag, user.displayAvatarURL())
                .setTitle("Buy Hardware");
            let prods = [];
            let item = 1;
            for (let prod of PRODUCERS_keys) {
                prods.push(`${NUMBERS[item]} **${PRODUCERS[prod][2]}**${dcm}${PRICE_SCALE(PRODUCERS[prod][1], user[prod])} - HashRate: ${PRODUCERS[prod][0]}/s - Owned: ${user[prod]}\n       *${PRODUCERS[prod][3]}*`);
                item++
            }
            embed.setDescription(prods.join("\n\n"))
                .setFooter(`Use \`${message.prefix}hardware <number>\` to buy a producer.`);
            return send(embed)
        }
        const key = PRODUCERS_keys[num - 1];
        const buying = PRODUCERS[key];
        if (!buying) return send("Invalid Hardware Index.");
        const owned = user.mined;
        const price = PRICE_SCALE(buying[1], user[key]);
        console.log(price);
        if (owned < price) return send("**Transaction Cancelled: Insufficient Funds**"), message.deleteAfter(5000);
        user.sell(price);
        user.buyP(key);
        return send(`**Transaction Successful: One ${buying[2]}`)
    }
});