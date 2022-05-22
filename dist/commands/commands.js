var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MAIN_1 = __importDefault(require("./MAIN"));
const help_1 = __importDefault(require("./help"));
const ceira_1 = __importDefault(require("./ceira"));
const sinas_1 = __importDefault(require("./sinas"));
const avatar_1 = __importDefault(require("./avatar"));
const servericon_1 = __importDefault(require("./servericon"));
function init(msg, prefix) {
    const userCom = msg.content.split(" ")[0];
    switch (userCom) {
        case (prefix):
            MAIN_1.default.exec(msg, prefix);
            break;
        case (prefix + "help"):
            help_1.default.exec(msg, prefix);
            break;
        case (prefix + "ceira"):
            ceira_1.default.exec(msg, prefix);
            break;
        case (prefix + "sinas"):
            sinas_1.default.exec(msg, prefix);
            break;
        case (prefix + "avatar"):
            avatar_1.default.exec(msg, prefix);
            break;
        case (prefix + "servericon"):
            servericon_1.default.exec(msg, prefix);
            break;
        default:
            break;
    }
}
const obj = {
    init
};
exports.default = obj;
