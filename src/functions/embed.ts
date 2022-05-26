import { MessageEmbed } from "discord.js";

function createEmbed(config: any): any {
    const embed = new MessageEmbed();
    if(config.color != undefined) embed.setColor(config.color);
    if(config.title != undefined) embed.setTitle(config.title);
    if(config.URL != undefined) embed.setURL(config.url);
    if(config.author != undefined) {
        let Fobj: any={};
        if(config.author.name != undefined) Fobj.name = config.author.name;
        if(config.author.iconURL != undefined) Fobj.iconURL = config.author.iconURL;
        if(config.author.url != undefined) Fobj.url = config.author.url;
        embed.setAuthor(Fobj);
    }
    if(config.description != undefined) embed.setDescription(config.description);
    if(config.thumbnail != undefined) embed.setThumbnail(config.thumbnail);
    if(config.filds != undefined) {
        let fildsArray: Array<object> = config.filds;
        for(let i=0;i<fildsArray.length;i++) {
            let Fobj={
                name: false,
                value: false,
                inline: false
            };
            if(config.filds[i].name != undefined) Fobj.name = true;
            if(config.filds[i].value != undefined) Fobj.value = true;
            if(config.filds[i].inline != undefined) Fobj.inline = true;
            if(!Fobj.name && Fobj.value && !Fobj.inline) embed.addField("", config.filds[i].value);
            if(!Fobj.name && Fobj.value && Fobj.inline) embed.addField("", config.filds[i].value, config.filds[i].inline);
            if(Fobj.name && !Fobj.value && !Fobj.inline) embed.addField(config.filds[i].name, "");
            if(Fobj.name && !Fobj.value && Fobj.inline) embed.addField(config.filds[i].name, "", config.filds[i].inline);
            if(Fobj.name && Fobj.value && !Fobj.inline) embed.addField(config.filds[i].name, config.filds[i].value);
            if(Fobj.name && Fobj.value && Fobj.inline) embed.addField(config.filds[i].name, config.filds[i].value, config.filds[i].inline);
        }
    }
    if(config.image != undefined) embed.setImage(config.image);
    if(config.timestamp != undefined) embed.setTimestamp(config.timestamp);
    if(config.footer != undefined) {
        let Fobj: any={};
        if(config.footer.text != undefined) Fobj.text = config.footer.text;
        if(config.footer.iconURL != undefined) Fobj.iconURL = config.footer.iconURL;
    }
    return embed;
}
const obj = {
    createEmbed
}
export default obj;