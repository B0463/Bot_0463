import { Message } from "discord.js";
export default {
    exec(msg: Message, prefix: any) {
        if(!msg.member.permissions.has("MANAGE_MESSAGES")) {
            msg.channel.send("You are not allowed to delete messages")
        }
        if(msg.content.split(" ").length != 2) {
            msg.channel.send("Invalid arguments, enter the number of messages to be deleted");
            return 0;
        }
        const count = parseInt(msg.content.split(" ")[1]);
        if(count<=1 || count>100) {
            msg.channel.send("Invalid number");
            return 0;
        }
        try {
            msg.delete();
            const msg2: any = msg;
            msg2.channel.bulkDelete(count);
            msg.channel.send(count+" deleted messages");
        }
        catch {
            msg.channel.send("can't delete these messages");
        }
    }
};