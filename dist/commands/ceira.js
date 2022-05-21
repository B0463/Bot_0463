Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    exec(msg, prefix) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('SINAS');
        msg.channel.send({ embeds: [embed] });
    }
};
