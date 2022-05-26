import { Message } from "discord.js";
import embedG from "../functions/embed";

export default {
    exec(msg: Message, prefix) {
        var embed = embedG.createEmbed({
            color: "#00ff00",
            title: "Server Icon",
            author: {
                name: msg.guild.name
            },
            description: `${msg.guild.name}'s server icon`,
            image: msg.guild.iconURL()
        });
        msg.channel.send({ embeds: [embed] });
    }
};