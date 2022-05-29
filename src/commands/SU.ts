import { Message } from "discord.js";
import ConCol from "../functions/console_color";
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
        ConCol.info(`eval by {${SuperUser.tag}} content {${Command}}:`);
        try {
            eval(Command);
        }
        catch (e) {
            ConCol.error(`eval: ${e}`);
            msg.channel.send(`eval error:\n\`\`\`${e}\`\`\``);
        }
    }
};