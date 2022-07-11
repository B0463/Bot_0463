import { Message } from "discord.js";
import FarbeLog from "../functions/FarbeLog";
export default {
    exec(msg: Message, prefix: any) {
        const configFile = require("../../config.json");
        const SUs = configFile.SU;
        let confirm=false;
        for(let i=0;i<SUs.length;i++) {
            if(msg.author.id == SUs[i]) {
                confirm = true;
                break;
            }
            continue;
        }
        if(!confirm) {
            msg.channel.send("You not SU!");
            return 0;
        }
        const SuperUser = msg.author;
        const Command = msg.content.substring(msg.content.split(" ")[0].length+1);
        FarbeLog.info.withHour("eval", `{${SuperUser.tag}} content {${Command}}:`);
        try {
            eval(Command);
        }
        catch (e) {
            FarbeLog.error.withHour("eval", e);
            msg.channel.send(`eval error:\n\`\`\`${e}\`\`\``);
        }
    }
};