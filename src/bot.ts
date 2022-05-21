// Init the bot.
import { Client, Message } from 'discord.js';
console.log("[OK] import discord.js");
import ConCol from "./console_color";
ConCol.ok("import log format");
import commands from "./commands/commands";
ConCol.ok("import commands ok");
const configFile = require("../config.json");
console.log("[OK] import ../config.json");
const app = new Client({intents:["GUILDS","GUILD_MESSAGES"]});
ConCol.ok("app and intents");
const prefix = configFile.prefix;
ConCol.ok("set prefix");
const token = configFile.token;
ConCol.ok("set token");
app.login(token);
// When client is ready 
app.on("ready", () => {
    ConCol.ok("Bot_0463 loged\n");
});
// When a message is created
app.on("messageCreate", (msg: Message) => {
    commands.init(msg, prefix);
});
app.on("error", (error) => {
    ConCol.error(error);
});