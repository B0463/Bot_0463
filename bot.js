//init the bot.
const { Client, MessageEmbed } = require('discord.js');
const configFile = require("./config.json");
const cliente = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
const prefix = configFile.prefix;
const token = configFile.token;
cliente.login(token);
function AvatarEmbed(autor) {
    return new MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Avatar')
        .setAuthor({ name: autor.username })
        .setDescription(`avatar of <@${autor.id}>`)
        .setImage(autor.avatarURL());
}
// When client is ready 
cliente.on("ready", () => {
    console.log("loged.\n");
});
// When a message is created
cliente.on("messageCreate", (msg) => {
    const autor = msg.author;
    const cont = msg.content;
    if(msg.author.bot == false) {
        if(cont.split(" ")[0]==prefix) {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Bot_0463')
                .setDescription("A bot made with discord.js by ***'! b.0463#3332'***.\nUse ***"+prefix+"help*** to see a list of available commands");
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"help") {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('HELP')
                .setDescription('HELP ME PLSS')
                .addFields(
                    { name: prefix+"", value: "default command" },
                    { name: prefix+"help", value: "list of commands" },
                    { name: prefix+"ceira", value: "returns sinas" },
                    { name: prefix+"sinas", value: "returns ceira" },
                    { name: prefix+"avatar", value: "returns your avatar (only works with user mention)" },
                    { name: prefix+"servericon", value: "returns the server icoon" }
                )
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"ceira") {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('SINAS');
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"sinas") {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('CEIRA');
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"avatar") {
            var conf=true;
            msg.mentions.users.map((mcuser) => { 
                if(conf) {
                    msg.channel.send({ embeds: [AvatarEmbed(mcuser)] });
                    conf=false;
                }
            });
            if(conf) {
                McId = msg.content.split(" ")[1];
                if(McId==undefined) {
                    msg.channel.send({ embeds: [AvatarEmbed(autor)] });
                } else {
                    msg.channel.send("Invalid argument.");
                }
            }
        } else if(cont.split(" ")[0]==prefix+"servericon") {
            var embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Server Icon')
                .setAuthor({ name: msg.guild.name })
                .setDescription(`${msg.guild.name}'s server icon`)
                .setImage(msg.guild.iconURL());
            msg.channel.send({ embeds: [embed] });
        }
    }
});
// When a new channel is created
cliente.on("channelCreate", (canal) => {
    canal.send('git commit -m "first message"');
    
});
// Handles errors
cliente.on("error", (error) => {
    console.log(`Discord.js Error: .\n${error}`);
});