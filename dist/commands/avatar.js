var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
function AvatarEmbed(autor) {
    return embed_1.default.createEmbed({
        color: "#00ff00",
        title: "Avatar",
        author: {
            name: autor.username
        },
        description: `avatar of <@${autor.id}>`,
        image: autor.avatarURL()
    });
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
