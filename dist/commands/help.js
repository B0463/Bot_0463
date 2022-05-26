var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
exports.default = {
    exec(msg, prefix) {
        const embed = embed_1.default.createEmbed({
            color: "#00ff00",
            title: "HELP",
            description: "HELP ME PLSS",
            filds: [
                { name: prefix + "", value: "default command" },
                { name: prefix + "help", value: "list of commands" },
                { name: prefix + "ceira", value: "returns sinas" },
                { name: prefix + "sinas", value: "returns ceira" },
                { name: prefix + "avatar", value: "returns your avatar (only works with user id)" },
                { name: prefix + "servericon", value: "returns the server icon" },
                { name: prefix + "theclock", value: "returns the current UTC time" },
                { name: prefix + "userinfo", value: "returns the information of acount" },
                { name: prefix + "clear", value: "cleat chat" }
            ]
        });
        msg.channel.send({ embeds: [embed] });
    }
};
