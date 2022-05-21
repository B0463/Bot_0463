import { MessageEmbed, Message } from "discord.js";

export default {
    exec(msg: Message, prefix) {
        var embed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Server Icon')
            .setAuthor({ name: msg.guild.name })
            .setDescription(`${msg.guild.name}'s server icon`)
            .setImage(msg.guild.iconURL());
        msg.channel.send({ embeds: [embed] });
    }
};