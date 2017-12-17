const {TOKEN, DBNAME, DBPASS, SHARDS} = require("./auth.js");

const config = {
    PREFIX: "..",

    DisabledGroups: [],
    DisabledCommands: [],

    dcm_b: "<:discordium:391771003304542218>",
    dcm: "<:discordium:391771003304542218>",

    PRODUCERS: {
        math: [
            1, //Production Rate
            100, //Starting Price
            "Mental Math", //Pretty Name
            "Take a math class to improve your math skills." //Silly Explanation
        ],
        calc: [
            2,
            500,
            "Calculator",
            "Calculate the hash calculations with improved calculation."
        ],
        rpi: [
            5,
            1000,
            "Rasberry Pi",
            "It's a computer, not a pie."
        ],
        cpu: [
            10,
            5000,
            "Processor",
            "More cores = More Powah!"
        ],
        gpu: [
            15,
            10000,
            "Graphics Card",
          "But can it run Crysis?"
        ],
        asic: [
            25,
            50000,
            "AntMiner",
            "It was made to mine!"
        ],
        cloud: [
            50,
            250000,
            "Cloud Service",
            "Why do the work when you can pay someone to do it for you."
        ],
        farm: [
            100,
            500000,
            "Server Farm",
            "Raising electronic animals that feed on power."
        ],
        quantum: [
            200,
            1000000,
            "Quantum Computer",
            "If a quantum bit is on and off at the same time then... does the cat really die?"
        ],
        wumpus: [
            1000,
            1000000000,
            "Wumpus",
            "Don't tell Discord we are stealing their wumpi."
        ]
    },

    PRICE_SCALE: (x, a) => x * ((1.2) ^ a),

    UPGRADES: {},

    HELP: {
        game: [
            "Discordium Mining",
            "Game commands."
        ],
        admin: [
            "Admin",
            "Change server settings."
        ],
        info: [
            "General",
            "Random stuff."
        ]
    },

    TABLES: [
        "user",
        "guild"
    ],

    FUNNBOT: "163735744995655680",

    NUMBERS: [
        ":zero:",
        ":one:",
        ":two:",
        ":three:",
        ":four:",
        ":five:",
        ":six:",
        ":seven:",
        ":eight:",
        ":nine:",
        ":one::zero:",
        ":one::one:",
        ":one::two:",
        ":one::three:",
        ":one::four:",
        ":one::five:",
        ":one::six:",
        ":one::seven:",
        ":one::eight:",
        ":one::nine:",
        ":two::zero:",
        ":two::one:",
        ":two::two:",
        ":two::three:",
        ":two::four:",
        ":two::five:"
    ],

    PERMISSIONS: {
        ADMINISTRATOR: "Administrator",
        CREATE_INSTANT_INVITE: "Create Instant Invite",
        KICK_MEMBERS: "Kick Members",
        BAN_MEMBERS: "Ban Members",
        MANAGE_CHANNELS: "Manage Channels",
        MANAGE_GUILD: "Manage Server",
        ADD_REACTIONS: "Add Reactions",
        VIEW_AUDIT_LOG: "View Audit Log",
        READ_MESSAGES: "Read Messages",
        SEND_MESSAGES: "Send Messages",
        SEND_TTS_MESSAGES: "Send TTS Messages",
        MANAGE_MESSAGES: "Manage Messages",
        EMBED_LINKS: "Embed Links",
        ATTACH_FILES: "Attach Files",
        READ_MESSAGE_HISTORY: "Read Message History",
        MENTION_EVERYONE: "Mention Everyone",
        USE_EXTERNAL_EMOJIS: "Use External Emojis",
        CONNECT: "Voice Connect",
        SPEAK: "Voice Speak",
        MUTE_MEMBERS: "Voice Mute Members",
        DEAFEN_MEMBERS: "Voice Deafen Members",
        MOVE_MEMBERS: "Voice Move Members",
        USE_VAD: "Use Voice Activity",
        CHANGE_NICKNAME: "Change Nickname",
        MANAGE_NICKNAMES: "Manage Nicknames",
        MANAGE_ROLES: "Manage Roles",
        MANAGE_WEBHOOKS: "Manage Webhooks",
        MANAGE_EMOJIS: "Manage Emojis"
    },

    COLORS: [
        "#03A9F4",
        "#039BE5",
        "#0288D1",
        "#0277BD",
        "#2196F3",
        "#1E88E5",
        "#1976D2",
        "#2962FF",
        "#448AFF",
        "#2979FF",
        "#2196F3",
        "#1E88E5",
        "#1976D2",
        "#1565C0",
        "#0091EA"
    ],

    TOKEN,
    DBNAME,
    DBPASS,
    SHARDS
};

config.PRODUCERS_keys = Object.keys(config.PRODUCERS);

module.exports = config;