Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function AvatarEmbed(autor) {
    return new discord_js_1.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Avatar')
        .setAuthor({ name: autor.username })
        .setDescription(`avatar of <@${autor.id}>`)
        .setImage(autor.avatarURL());
}
exports.default = {
    exec(msg, prefix) {
        var conf = true;
        msg.mentions.users.map((mcuser) => {
            if (conf) {
                msg.channel.send({ embeds: [AvatarEmbed(mcuser)] });
                conf = false;
            }
        });
        if (conf) {
            let McId = msg.content.split(" ")[1];
            if (McId == undefined) {
                msg.channel.send({ embeds: [AvatarEmbed(msg.author)] });
            }
            else {
                msg.channel.send("Invalid argument.");
            }
        }
    }
};
