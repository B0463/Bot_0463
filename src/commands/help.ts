import { MessageEmbed, Message } from "discord.js";
export default {
    exec(msg: Message, prefix: any) {
        const embed = new MessageEmbed()
            .setColor('#00ff00')
            .setTitle('HELP')
            .setDescription('HELP ME PLSS')
            .addFields(
                { name: prefix+"", value: "default command" },
                { name: prefix+"help", value: "list of commands" },
                { name: prefix+"ceira", value: "returns sinas" },
                { name: prefix+"sinas", value: "returns ceira" },
                { name: prefix+"avatar", value: "returns your avatar (only works with user id)" },
                { name: prefix+"servericon", value: "returns the server icoon" }
            );
        msg.channel.send({ embeds: [embed] });
    }
};