import { Message } from "discord.js";
import embedG from "../functions/embed";
export default {
    exec(msg: Message, prefix: any) {
        const embed = embedG.createEmbed({
            color: "#00ff00",
            title: "SINAS"
        });
        msg.channel.send({ embeds: [embed] });
    }
};