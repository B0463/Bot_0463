import { MessageEmbed, Message } from "discord.js";
function UserInfoEmbed(autor: Message["author"]) {
    return new MessageEmbed()
        .setColor('#00ff00')
        .setTitle('UserInfo')
        .setAuthor({ name: autor.username })
        .setThumbnail(autor.avatarURL())
        .addFields(
            { name: '**Tag**', value: `\`${autor.tag}\``, inline: true  },
            { name: '**ID**', value: `\`${autor.id}\``, inline: true  }
        );
        
}
export default {
    exec(msg: Message, prefix: any) {
        let conf=true;
            msg.mentions.users.map((mcuser) => { 
                if(conf) {
                    msg.channel.send({ embeds: [UserInfoEmbed(mcuser)] });
                    conf=false;
                }
            });
            if(conf) {
                let McId = msg.content.split(" ")[1];
                if(McId==undefined) {
                    msg.channel.send({ embeds: [UserInfoEmbed(msg.author)] });
                } else {
                    msg.channel.send("Invalid argument.");
                }
            }
    }
};