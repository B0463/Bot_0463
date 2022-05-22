Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function getUTCDate() {
    const now = new Date;
    let Day = now.getUTCDate();
    let Month = now.getUTCMonth() + 1;
    let Year = now.getUTCFullYear();
    let Hour = now.getUTCHours();
    let Minute = now.getUTCMinutes();
    let ms = now.getUTCMilliseconds();
    let FDay = `${Day}`;
    let FMonth = `${Month}`;
    let FYear = `${Year}`;
    let FHour = `${Hour}`;
    let FMinute = `${Minute}`;
    let Fms = `${ms}`;
    if (Day < 10)
        FDay = `0${Day}`;
    if (Month < 10)
        FMonth = `0${Month}`;
    if (Hour < 10)
        FHour = `0${Hour}`;
    if (Minute < 10)
        FMinute = `0${Minute}`;
    if (ms < 10)
        Fms = `00${ms}`;
    if (ms < 100)
        Fms = `0${ms}`;
    const DateFormated = `UTC ${FDay}/${FMonth}/${FYear} - ${FHour}:${FMinute};${Fms}`;
    return DateFormated;
}
exports.default = {
    exec(msg, prefix) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('The Clock')
            .setDescription(getUTCDate());
        msg.channel.send({ embeds: [embed] });
    }
};
