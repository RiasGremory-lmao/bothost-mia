const key = require('../config.json')
const Discord = require('discord.js')
module.exports={
    commands:'ar',
    callback: (message, args, text) => {
        if (message.author.id === key['owner-id']) {
            let member = message.mentions.members.first();
            let RoleName = args.slice(1).join(" ");
            const roleadd = message.guild.roles.cache.find(r => r.name === `${RoleName}`)
            member.roles.add(roleadd).catch(console.error)

            let Embed = new Discord.MessageEmbed()
                .setColor('#11ff00')
                .setTitle(`Thêm role thành công!`)
                .addField(`Role được add`, `<@&${roleadd.id}>`)
                .addField(`Người được add role`, `<@${member.user.id}>`)
                .setTimestamp();
            
            message.channel.send(Embed)
        }
        else {
            let Embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`Thêm role thất bại.`)
                .addField(`Bạn không dùng được lệnh này.`)
                .setTimestamp();

            message.channel.send(Embed)
        }
    }
}