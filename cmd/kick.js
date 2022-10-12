module.exports = {
    commands: 'kick',
    expectedArgs: "<@mention>",
    callback: (message, args) => {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(`Tạm biệt ${memberTarger} nhé...`);
        }
        else return message.reply("mình không làm được...");
    },
    permissions: ["KICK_MEMBERS"]
}
