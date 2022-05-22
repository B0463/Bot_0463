Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function UserInfoEmbed(autor) {
    console.log(autor.flags);
    return new discord_js_1.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('UserInfo')
        .setAuthor({ name: autor.username })
        .setThumbnail(autor.avatarURL())
        .addFields({ name: '**Tag**', value: `\`${autor.tag}\``, inline: true }, { name: '**ID**', value: `\`${autor.id}\``, inline: true }, { name: '**Flags**', value: `\`${autor.flags}\``, inline: true });
}
exports.default = {
    exec(msg, prefix) {
        let conf = true;
        msg.mentions.users.map((mcuser) => {
            if (conf) {
                msg.channel.send({ embeds: [UserInfoEmbed(mcuser)] });
                conf = false;
            }
        });
        if (conf) {
            let McId = msg.content.split(" ")[1];
            if (McId == undefined) {
                msg.channel.send({ embeds: [UserInfoEmbed(msg.author)] });
            }
            else {
                msg.channel.send("Invalid argument.");
            }
        }
    }
};
