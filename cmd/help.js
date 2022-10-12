const Discord = require('discord.js') 

module.exports = {
    commands: ['help', '?'],
    callback: (message, args) => {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#e6b58c')
        .setTitle('Hướng dẫn của Mahiru-chan')
        .setDescription(`
Chức năng của Mia:`)
        .addFields(
            {name: 'ping', value: 'Cái này đang vô dụng'},
            {name: 'kick <mention>', value: 'Đuổi ai đó ra khỏi server.'}, 
            {name: 'ban <mention>', value: 'Đuổi ai đó ra khỏi server **vĩnh viễn**.'},
            {name: 'mute <mention> {time}', value: 'Cho ai đó cách xa đất liền trong {time}. Nếu không ghi thời gian thì nghĩa là mute vô thời hạn.'},
            {name: 'unmute <mention>', value: 'Ngừng mute cho ai đó đang bị mute.'},
            {name: 'clear <number>', value: 'Xoá {number} tin nhắn gần nhất.'},
            {name: 'svinfo', value: 'Thông tin về server.'}
        )
        .setFooter('Nhớ thêm prefix < moon+ > trước khi dùng Mia nhé!');
        
        message.channel.send(newEmbed);
    }
}