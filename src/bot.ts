// Init the bot.
import { Client, Message } from 'discord.js';
console.log("[OK] import discord.js");
import ConCol from "./functions/console_color";
ConCol.ok("import log format");
import commands from "./commands/commands";
ConCol.ok("import commands");
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
const debugState = configFile.debug.active;
ConCol.ok("set debugState")
const debugServers = configFile.debug.debugServers;
if(debugState) {
    ConCol.info("debug actived");
    for(let i=0;i<debugServers.length;i++) {
        ConCol.info(`debugServer: ${debugServers[i]} loaded`);
    }
}
app.login(token);
// When client is ready 
app.on("ready", () => {
    ConCol.ok("Bot_0463 loged");
    for(let i=0;i<SUs.length;i++) {
        ConCol.info(`SU: ${SUs[i]} loaded`);
    }
});
// When a message is created
if(!debugState) {
    app.on("messageCreate", (msg: Message) => {
        commands.init(msg, prefix);
    });
} else {
    app.on("messageCreate", (msg: Message) => {
        let confirm=false;
        for(let i=0;i<debugServers.length;i++) {
            if(msg.guild.id == debugServers[i]) {
                confirm = true;
                break;
            }
            continue;
        }
        if(confirm) {
            commands.init(msg, prefix);
        }
        else {
            commands.noDebugServer(msg, prefix);
        }
    });
}
app.on("error", (error) => {
    ConCol.error(error);
});