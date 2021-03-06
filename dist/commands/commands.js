var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SU_1 = __importDefault(require("./SU"));
const MAIN_1 = __importDefault(require("./MAIN"));
const help_1 = __importDefault(require("./help"));
const ceira_1 = __importDefault(require("./ceira"));
const sinas_1 = __importDefault(require("./sinas"));
const avatar_1 = __importDefault(require("./avatar"));
const servericon_1 = __importDefault(require("./servericon"));
const theclock_1 = __importDefault(require("./theclock"));
const userinfo_1 = __importDefault(require("./userinfo"));
const clear_1 = __importDefault(require("./clear"));
function verifyUserPrefix(msg, prefix) {
    const userCom = msg.content.split(" ")[0];
    const prefixLen = prefix.length;
    if (userCom.length < prefixLen)
        return false;
    const userPrefix = userCom.substring(0, prefixLen);
    if (userPrefix == prefix) {
        return true;
    }
    else
        return false;
}
function init(msg, prefix) {
    if (msg.author.bot)
        return 1;
    if (!verifyUserPrefix(msg, prefix))
        return 1;
    switch (msg.content.split(" ")[0]) {
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
        case (prefix + "theclock"):
            theclock_1.default.exec(msg, prefix);
            break;
        case (prefix + "userinfo"):
            userinfo_1.default.exec(msg, prefix);
            break;
        case (prefix + "clear"):
            clear_1.default.exec(msg, prefix);
            break;
        case (prefix + "SU"):
            SU_1.default.exec(msg, prefix);
            break;
        default:
            MAIN_1.default.exec(msg, prefix);
            break;
    }
    return 0;
}
function noDebugServer(msg, prefix) {
    if (msg.author.bot)
        return 1;
    const userCom = msg.content.split(" ")[0];
    const prefixLen = prefix.length;
    if (userCom.length < prefixLen)
        return 1;
    const userPrefix = userCom.substring(0, prefixLen);
    if (userPrefix == prefix) {
        msg.channel.send("sorry, Bot_0463 on development.");
    }
    else
        return 1;
}
const obj = {
    init,
    noDebugServer
};
exports.default = obj;
