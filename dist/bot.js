var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Init the bot.
const FarbeLog_1 = __importDefault(require("./functions/FarbeLog"));
FarbeLog_1.default.ok.withHour("import", "log format");
const discord_js_1 = require("discord.js");
FarbeLog_1.default.ok.withHour("import", "discord.js");
const commands_1 = __importDefault(require("./commands/commands"));
FarbeLog_1.default.ok.withHour("import", "commands");
const configFile = require("../config.json");
FarbeLog_1.default.ok.withHour("import", "../config.json");
const app = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
FarbeLog_1.default.ok.withHour("set", "app and intents");
const prefix = configFile.prefix;
FarbeLog_1.default.ok.withHour("set", "prefix");
const token = configFile.token;
FarbeLog_1.default.ok.withHour("set", "token");
const SUs = configFile.SU;
FarbeLog_1.default.ok.withHour("set", "SUs users");
const debugState = configFile.debug.active;
FarbeLog_1.default.ok.withHour("set", "debugState");
const debugServers = configFile.debug.debugServers;
if (debugState) {
    FarbeLog_1.default.info.withHour("enabled", "debug");
    for (let i = 0; i < debugServers.length; i++) {
        FarbeLog_1.default.info.withHour("loaded", `debugServer: ${debugServers[i]}`);
    }
}
app.login(token);
// When client is ready 
app.on("ready", () => {
    FarbeLog_1.default.ok.withHour("logged", "Bot_0463");
    for (let i = 0; i < SUs.length; i++) {
        FarbeLog_1.default.info.withHour("loaded", `SU: ${SUs[i]}`);
    }
});
// When a message is created
if (!debugState) {
    app.on("messageCreate", (msg) => {
        commands_1.default.init(msg, prefix);
    });
}
else {
    app.on("messageCreate", (msg) => {
        let confirm = false;
        for (let i = 0; i < debugServers.length; i++) {
            if (msg.guild.id == debugServers[i]) {
                confirm = true;
                break;
            }
            continue;
        }
        if (confirm) {
            commands_1.default.init(msg, prefix);
        }
        else {
            commands_1.default.noDebugServer(msg, prefix);
        }
    });
}
app.on("error", (error) => {
    FarbeLog_1.default.error.withHour("app error", "error with app:\n" + error);
});
