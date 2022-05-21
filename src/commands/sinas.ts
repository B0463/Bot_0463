import { MessageEmbed, Message } from "discord.js";
export default {
    exec(msg: Message, prefix: any) {
        const embed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle('CEIRA');
        msg.channel.send({ embeds: [embed] });
    }
};