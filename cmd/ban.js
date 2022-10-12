module.exports = {
    commands: 'ban',
    callback:(message, args) => {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`${memberTarger}, đừng xuất hiện trước mặt mình nữa!`);
        }
        else return message.reply("cậu ghét mình sao...");
    },
    permissions: ["BAN_MEMBERS"]
}
