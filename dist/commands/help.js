Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    exec(msg, prefix) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('HELP')
            .setDescription('HELP ME PLSS')
            .addFields({ name: prefix + "", value: "default command" }, { name: prefix + "help", value: "list of commands" }, { name: prefix + "ceira", value: "returns sinas" }, { name: prefix + "sinas", value: "returns ceira" }, { name: prefix + "avatar", value: "returns your avatar (only works with user id)" }, { name: prefix + "servericon", value: "returns the server icon" }, { name: prefix + "theclock", value: "returns the current UTC time" });
        msg.channel.send({ embeds: [embed] });
    }
};
