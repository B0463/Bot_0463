import { Message } from "discord.js";
import embedG from "../functions/embed";
function AvatarEmbed(autor) {
    return embedG.createEmbed({
        color: "#00ff00",
        title: "Avatar",
        author: {
            name: autor.username
        },
        description: `avatar of <@${autor.id}>`,
        image: autor.avatarURL()
    });
}
export default {
    exec(msg: Message, prefix: any) {
        var conf=true;
            msg.mentions.users.map((mcuser) => { 
                if(conf) {
                    msg.channel.send({ embeds: [AvatarEmbed(mcuser)] });
                    conf=false;
                }
            });
            if(conf) {
                let McId = msg.content.split(" ")[1];
                if(McId==undefined) {
                    msg.channel.send({ embeds: [AvatarEmbed(msg.author)] });
                } else {
                    msg.channel.send("Invalid argument.");
                }
            }
    }
};