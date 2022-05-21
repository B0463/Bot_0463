import { MessageEmbed, Message } from "discord.js";
export default {
    exec(msg: Message, prefix: any) {
        const embed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Bot_0463')
            .setDescription("A bot made with discord.js by ***'! b.0463#3332'***.\nUse ***"+prefix+"help*** to see a list of available commands");
        msg.channel.send({ embeds: [embed] });
    }
};