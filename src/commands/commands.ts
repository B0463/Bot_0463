import { Message } from "discord.js";
import MAIN from "./MAIN";
import help from "./help";
import ceira from "./ceira";
import sinas from "./sinas";
import avatar from "./avatar";
import servericon from "./servericon";
function init(msg: Message, prefix: string) {
    const userCom = msg.content.split(" ")[0];
    if(userCom == prefix) {
        MAIN.exec(msg, prefix);
    } else if(userCom == prefix+"help") {
        help.exec(msg, prefix);
    } else if(userCom == prefix+"ceira") {
        ceira.exec(msg, prefix);
    } else if(userCom == prefix+"sinas") {
        sinas.exec(msg, prefix);
    } else if(userCom == prefix+"avatar") {
        avatar.exec(msg, prefix);
    } else if(userCom == prefix+"servericon") {
        servericon.exec(msg, prefix);
    }
}
const obj = {
    init
}
export default obj;