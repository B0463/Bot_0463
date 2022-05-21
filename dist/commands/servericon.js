Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    exec(msg, prefix) {
        var embed = new discord_js_1.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Server Icon')
            .setAuthor({ name: msg.guild.name })
            .setDescription(`${msg.guild.name}'s server icon`)
            .setImage(msg.guild.iconURL());
        msg.channel.send({ embeds: [embed] });
    }
};
