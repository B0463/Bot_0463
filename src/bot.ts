// Init the bot.
import FarbeLog from "./functions/FarbeLog";
FarbeLog.ok.withHour("import", "log format");
import { Client, Message } from 'discord.js';
FarbeLog.ok.withHour("import", "discord.js");
import commands from "./commands/commands";
FarbeLog.ok.withHour("import", "commands");
const configFile = require("../config.json");
FarbeLog.ok.withHour("import", "../config.json");
const app = new Client({intents:["GUILDS","GUILD_MESSAGES"]});
FarbeLog.ok.withHour("set", "app and intents");
const prefix = configFile.prefix;
FarbeLog.ok.withHour("set", "prefix");
const token = configFile.token;
FarbeLog.ok.withHour("set", "token");
const SUs = configFile.SU;
FarbeLog.ok.withHour("set", "SUs users");
const debugState = configFile.debug.active;
FarbeLog.ok.withHour("set", "debugState")
const debugServers = configFile.debug.debugServers;
if(debugState) {
    FarbeLog.info.withHour("enabled", "debug");
    for(let i=0;i<debugServers.length;i++) {
        FarbeLog.info.withHour("loaded", `debugServer: ${debugServers[i]}`);
    }
}
app.login(token);
// When client is ready 
app.on("ready", () => {
    FarbeLog.ok.withHour("logged", "Bot_0463");
    for(let i=0;i<SUs.length;i++) {
        FarbeLog.info.withHour("loaded", `SU: ${SUs[i]}`);
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
    FarbeLog.error.withHour("app error", "error with app:\n"+error);
});