var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
function getUserCreatedUTCDate(user) {
    const now = user.createdAt;
    let Day = now.getUTCDate();
    let Month = now.getUTCMonth() + 1;
    let Year = now.getUTCFullYear();
    let Hour = now.getUTCHours();
    let Minute = now.getUTCMinutes();
    let Seconds = now.getUTCSeconds();
    let ms = now.getUTCMilliseconds();
    let FDay = `${Day}`;
    let FMonth = `${Month}`;
    let FYear = `${Year}`;
    let FHour = `${Hour}`;
    let FMinute = `${Minute}`;
    let FSeconds = `${Seconds}`;
    let Fms = `${ms}`;
    if (Day < 10)
        FDay = `0${Day}`;
    if (Month < 10)
        FMonth = `0${Month}`;
    if (Hour < 10)
        FHour = `0${Hour}`;
    if (Minute < 10)
        FMinute = `0${Minute}`;
    if (Seconds < 10)
        FSeconds = `0${Seconds}`;
    if (ms < 10)
        Fms = `00${ms}`;
    if (ms < 100 && ms >= 10)
        Fms = `0${ms}`;
    const DateFormated = `UTC ${FDay}/${FMonth}/${FYear}\n${FHour}:${FMinute}:${FSeconds},${Fms}`;
    return DateFormated;
}
function UserInfoEmbed(autor) {
    return embed_1.default.createEmbed({
        color: "#00ff00",
        title: "UserInfo",
        author: {
            name: autor.username
        },
        thumbnail: autor.avatarURL(),
        filds: [
            { name: '**Tag**', value: `\`${autor.tag}\``, inline: true },
            { name: '**ID**', value: `\`${autor.id}\``, inline: true },
            { name: "**Conta criada em**", value: `\`${getUserCreatedUTCDate(autor)}\``, inline: true }
        ]
    });
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
