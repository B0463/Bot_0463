var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_color_1 = __importDefault(require("../functions/console_color"));
exports.default = {
    exec(msg, prefix) {
        const configFile = require("../../config.json");
        const SUs = configFile.SU;
        let confirm = false;
        for (let i = 0; i < SUs.length; i++) {
            if (msg.author.id == SUs[i]) {
                confirm = true;
                break;
            }
            continue;
        }
        if (!confirm) {
            msg.channel.send("You not SU!");
            return 0;
        }
        const SuperUser = msg.author;
        const Command = msg.content.substring(msg.content.split(" ")[0].length + 1);
        console_color_1.default.info(`eval by {${SuperUser.tag}} content {${Command}}:`);
        try {
            eval(Command);
        }
        catch (e) {
            console_color_1.default.error(`eval: ${e}`);
            msg.channel.send(`eval error:\n\`\`\`${e}\`\`\``);
        }
    }
};
