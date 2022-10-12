module.exports = {
    commands: 'clear',
    minArgs: 1,
    maxArgs: 2,
    callback: async (message, args) =>  {       
        if (!args[0]) return message.reply("không nhập số thì xoá bừa sao?");

        if(isNaN(args[0])) return message.reply("ý của cậu là... Không cần phải xoá?");

        if(args[0] < 1) return message.reply("không xoá thì gọi mình ra làm gì vậy?");
        
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    },
    permissions: ['MANAGE_MESSAGES']
}
