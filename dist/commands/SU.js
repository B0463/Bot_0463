var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FarbeLog_1 = __importDefault(require("../functions/FarbeLog"));
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
        FarbeLog_1.default.info.withHour("eval", `{${SuperUser.tag}} content {${Command}}:`);
        try {
            eval(Command);
        }
        catch (e) {
            FarbeLog_1.default.error.withHour("eval", e);
            msg.channel.send(`eval error:\n\`\`\`${e}\`\`\``);
        }
    }
};
