import { Message } from "discord.js";
import MAIN from "./MAIN";
import help from "./help";
import ceira from "./ceira";
import sinas from "./sinas";
import avatar from "./avatar";
import servericon from "./servericon";
import theclock from "./theclock";
import userinfo from "./userinfo";
function init(msg: Message, prefix: string) {
    const userCom = msg.content.split(" ")[0];
    switch(userCom) {
        case(prefix):
            MAIN.exec(msg, prefix);
            break;
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
        default:
            break;
    }
}
const obj = {
    init
}
export default obj;