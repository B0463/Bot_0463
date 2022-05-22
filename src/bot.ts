// Init the bot.
import { Client, Message } from 'discord.js';
console.log("[OK] import discord.js");
import ConCol from "./functions/console_color";
ConCol.ok("import log format");
import commands from "./commands/commands";
ConCol.ok("import commands ok");
const configFile = require("../config.json");
ConCol.ok("import ../config.json");
const app = new Client({intents:["GUILDS","GUILD_MESSAGES"]});
ConCol.ok("app and intents");
const prefix = configFile.prefix;
ConCol.ok("set prefix");
const token = configFile.token;
ConCol.ok("set token");
const SUs = configFile.SU;
ConCol.ok("set SUs users");
app.login(token);
// When client is ready 
app.on("ready", () => {
    ConCol.ok("Bot_0463 loged");
    for(let i=0;i<SUs.length;i++) {
        ConCol.info(`SU: ${SUs[i]} loaded`);
    }
});
// When a message is created
app.on("messageCreate", (msg: Message) => {
    commands.init(msg, prefix);
});
app.on("error", (error) => {
    ConCol.error(error);
});