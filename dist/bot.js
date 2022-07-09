var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Init the bot.
const discord_js_1 = require("discord.js");
console.log("[OK] import discord.js");
const console_color_1 = __importDefault(require("./functions/console_color"));
console_color_1.default.ok("import log format");
const commands_1 = __importDefault(require("./commands/commands"));
console_color_1.default.ok("import commands");
const configFile = require("../config.json");
console_color_1.default.ok("import ../config.json");
const app = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
console_color_1.default.ok("app and intents");
const prefix = configFile.prefix;
console_color_1.default.ok("set prefix");
const token = configFile.token;
console_color_1.default.ok("set token");
const SUs = configFile.SU;
console_color_1.default.ok("set SUs users");
const debugState = configFile.debug.active;
console_color_1.default.ok("set debugState");
const debugServers = configFile.debug.debugServers;
if (debugState) {
    console_color_1.default.info("debug enabled");
    for (let i = 0; i < debugServers.length; i++) {
        console_color_1.default.info(`debugServer: ${debugServers[i]} loaded`);
    }
}
app.login(token);
// When client is ready 
app.on("ready", () => {
    console_color_1.default.ok("Bot_0463 loged");
    for (let i = 0; i < SUs.length; i++) {
        console_color_1.default.info(`SU: ${SUs[i]} loaded`);
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
    console_color_1.default.error(error);
});
