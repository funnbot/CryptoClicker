const Clicker = require("../../Clicker.js");
const {dcm, dcm_b} = require("../../config.js");

module.exports = new Clicker.Command({
    help: "The top players.",
    example: "${p}leaderboard || ${p}leaderboard 5",
    argExample: "<num>",
    userPerms: 0,
    botPerms: ["EMBED_LINKS"],
    alias: ["lb"],
    args: [{
        type: "number",
        prompt: "What page of the leaderboard?",
        min: 1,
        optional: true
    }],
    dm: true,

    run: async (message, bot, send) => {
        let num = message.args[0] || 1;
        const users = bot.Database.user;
        const ids = Object.keys(users);
        let paged = new Clicker.Paginator(ids);
        paged.sort((a, b) => users[b].mined - users[a].mined);
        paged.paginate(15);
        const page = paged.getPage(num - 1);
        const embed = new bot.Embed()
            .setTitle("Leaderboard")
            .setFooter(`Page ${num}/${paged.pages.length}`);
        let txt = [];
        for (let [index, id] of page) {
            let user = await bot.users.fetch(id);
            if (!user) continue;
            txt.push(`**${index + 1}.** ${user.tag}${dcm}${user.mined}`)
        }
        embed.setDescription(txt.join("\n"))
            .clickerColor();
        send(embed)
    }
});