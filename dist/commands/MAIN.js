Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    exec(msg, prefix) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Bot_0463')
            .setDescription("A bot made with discord.js by ***'! b.0463#8080'***.\nUse ***" + prefix + "help*** to see a list of available commands");
        msg.channel.send({ embeds: [embed] });
    }
};
