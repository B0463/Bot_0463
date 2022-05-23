import { Message } from "discord.js";
import SU from "./SU";
import MAIN from "./MAIN";
import help from "./help";
import ceira from "./ceira";
import sinas from "./sinas";
import avatar from "./avatar";
import servericon from "./servericon";
import theclock from "./theclock";
import userinfo from "./userinfo";
function verifyUserPrefix(msg: Message, prefix): boolean {
    const userCom = msg.content.split(" ")[0];
    const prefixLen = prefix.length;
    if(userCom.length < prefixLen) return false;
    const userPrefix = userCom.substring(0, prefixLen);
    if(userPrefix == prefix) {
        return true;
    } else return false;
}
function init(msg: Message, prefix: string): number {
    if(msg.author.bot) return 1;
    if(!verifyUserPrefix(msg, prefix)) return 1;
    switch(msg.content.split(" ")[0]) {
        case(prefix+"help"):
            help.exec(msg, prefix);
            break;
        case(prefix+"ceira"):
            ceira.exec(msg, prefix);
            break;
        case(prefix+"sinas"):
            sinas.exec(msg, prefix);
            break;
        case(prefix+"avatar"):
            avatar.exec(msg, prefix);
            break;
        case(prefix+"servericon"):
            servericon.exec(msg, prefix);
            break;
        case(prefix+"theclock"):
            theclock.exec(msg, prefix);
            break;
        case(prefix+"userinfo"):
            userinfo.exec(msg, prefix);
            break;
        case(prefix+"SU"):
            SU.exec(msg, prefix);
            break;
        default:
            MAIN.exec(msg, prefix);
            break;
    }
    return 0;
}
function noDebugServer(msg: Message, prefix: string) {
    if(msg.author.bot) return 1;
    const userCom = msg.content.split(" ")[0];
    const prefixLen = prefix.length;
    if(userCom.length < prefixLen) return 1;
    const userPrefix = userCom.substring(0, prefixLen);
    if(userPrefix == prefix) {
        msg.channel.send("sorry, Bot_0463 on development.");
    } else return 1;
}
const obj = {
    init,
    noDebugServer
}
export default obj;