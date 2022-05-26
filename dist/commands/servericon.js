var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
exports.default = {
    exec(msg, prefix) {
        var embed = embed_1.default.createEmbed({
            color: "#00ff00",
            title: "Server Icon",
            author: {
                name: msg.guild.name
            },
            description: `${msg.guild.name}'s server icon`,
            image: msg.guild.iconURL()
        });
        msg.channel.send({ embeds: [embed] });
    }
};
