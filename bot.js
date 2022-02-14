//init the bot.
console.log("importing discord.js\n");
const { Client, MessageEmbed } = require('discord.js');
console.log("importing config.json\n");
const configFile = require("./config.json");
console.log("creating client\n");
const cliente = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
console.log("creating prefix\n");
const prefix=configFile.prefix;
console.log("creating token\n");
const token=configFile.token;
console.log("logging in\n")
cliente.login(token);

//if bot init:
cliente.on("ready", () => {
    console.log("logged\n");
});
//if message create
cliente.on("messageCreate", (msg) => {
    const autor = msg.author;
    const cont = msg.content;
    if(msg.author.bot == false) {
        if(cont.split(" ")[0]==prefix) {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Bot_0463')
                .setDescription("Um bot feito em JavaScript com node.js e discord.js por ***'! b.0463#3332'***.\nUtilize ***"+prefix+"help*** para ver os comandos");
            msg.channel.send({ embeds: [embed] });
        }
        else if(cont.split(" ")[0]==prefix+"help") {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('HELP')
                .setDescription('Comandos do Bot_0463')
                .addFields(
                    { name: prefix+"", value: "comando padrão" },
                    { name: prefix+"help", value: "comandos" },
                    { name: prefix+"ceira", value: "retorna sinas" },
                    { name: prefix+"sinas", value: "retorna ceira" },
                    { name: prefix+"avatar", value: "retorna seu avatar (mencione um usuario para ver o avatar dele)" },
                    { name: prefix+"servericon", value: "retorna o icone do servidor" }
                )
            msg.channel.send({ embeds: [embed] });
        }
        else if(cont.split(" ")[0]==prefix+"ceira") {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('SINAS');
            msg.channel.send({ embeds: [embed] });
        }
        else if(cont.split(" ")[0]==prefix+"sinas") {
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('CEIRA');
            msg.channel.send({ embeds: [embed] });
        }
        else if(cont.split(" ")[0]==prefix+"avatar") {
            var conf=true;
            msg.mentions.users.map((mcuser) => { 
                if(conf) {
                    const embed = new MessageEmbed()
                        .setColor('#00ff00')
                        .setTitle('Avatar')
                        .setAuthor({ name: mcuser.username })
                        .setDescription('avatar de <@'+mcuser.id+">")
                        .setImage(mcuser.avatarURL());
                    msg.channel.send({ embeds: [embed] });
                    conf=false;
                }
            });
            if(conf) {
                McId = msg.content.split(" ")[1];
                if(McId==undefined) {
                    var embed = new MessageEmbed()
                        .setColor('#00ff00')
                        .setTitle('Avatar')
                        .setAuthor({ name: autor.username })
                        .setDescription('avatar de <@'+autor.id+">")
                        .setImage(autor.avatarURL());
                    msg.channel.send({ embeds: [embed] });
                } else {
                    msg.channel.send("argumento invalido.");
                }
            }
        }
        else if(cont.split(" ")[0]==prefix+"servericon") {
            var embed = new MessageEmbed()
                .setColor('#00ff00')
                .setTitle('Server Icon')
                .setAuthor({ name: msg.guild.name })
                .setDescription('icone de '+msg.guild.name)
                .setImage(msg.guild.iconURL());
            msg.channel.send({ embeds: [embed] });
        }
    }
});
//if channel create
cliente.on("channelCreate", (canal) => {
    canal.send('git commit -m "first message"');
});
//quando der erro
cliente.on("error", (error) => {
    console.log(`ocorreu um erro.\n${error}`)
});