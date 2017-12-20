const Clicker = require("../../Clicker.js");
const {FUNNBOT} = require("../../Config.js");
const {inspect} = require("util");

module.exports = new Clicker.Command({
    help: "Eval code",
    userPerms: 2,

    run: async (message, bot, send) => {
        if (message.author.id !== FUNNBOT) return;
        if (!message.checkSuffix) return;
        try {
            const start = Date.now();
            let evaled = await eval(message.suffix);
            if (typeof evaled !== "string")
                evaled = inspect(evaled);
            inspect();
            const time = Date.now() - start;
            if (evaled.length > 1500) evaled.substr(0, 1500);
            const txt = ev(message.suffix, "Output", clean(evaled), time);
            return send(txt);
        } catch (e) {
            const txt = ev(message.suffix, "Error", clean(e), 0);
            return send(txt);
        }
    }
});

const ev = (input, type, code, time) => {
    return `
:inbox_tray: **Input:**
\`\`\`js
${input}\`\`\`
:outbox_tray: **${type}:**
\`\`\`${type === "Output" ? "js" : "prolog"}
${code}\`\`\`
\`Execution Time: ${time}MS\``
};

let clean = (t) => {
    let split = Clicker.config.TOKEN.split(".");
    const r = new RegExp(`(${split[1]})|(${split[2]})`, "g");
    return t.toString().replace(r, "[SECRET]");
};