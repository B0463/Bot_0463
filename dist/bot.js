var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Init the bot.
const discord_js_1 = require("discord.js");
console.log("[OK] import discord.js");
const console_color_1 = __importDefault(require("./console_color"));
console_color_1.default.ok("import log format");
const commands_1 = __importDefault(require("./commands/commands"));
console_color_1.default.ok("import commands ok");
const configFile = require("../config.json");
console.log("[OK] import ../config.json");
const app = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
console_color_1.default.ok("app and intents");
const prefix = configFile.prefix;
console_color_1.default.ok("set prefix");
const token = configFile.token;
console_color_1.default.ok("set token");
app.login(token);
// When client is ready 
app.on("ready", () => {
    console_color_1.default.ok("Bot_0463 loged\n");
});
// When a message is created
app.on("messageCreate", (msg) => {
    commands_1.default.init(msg, prefix);
});
app.on("error", (error) => {
    console_color_1.default.error(error);
});
