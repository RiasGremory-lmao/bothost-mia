const key = require('../config.json')
const Discord = require('discord.js')
module.exports={
    commands:'rr',
    callback: (message, args, text) => {
        if (message.author.id === key['owner-id']) {
            let member = message.mentions.members.first();
            let RoleName = args.slice(1).join(" ");
            const roleremove = message.guild.roles.cache.find(r => r.name === `${RoleName}`)
            member.roles.remove(roleremove).catch(console.error)
            
            let Embed = new Discord.MessageEmbed()
                .setColor('#11ff00')
                .setTitle(`Xoá role thành công!`)
                .addField(`Role bị xoá`, `<@&${roleremove.id}>`)
                .addField(`Người bị xoá role`, `<@${member.user.id}>`)
                .setTimestamp();
            
            message.channel.send(Embed)
        }
        else {
            let Embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`Xoá role thất bại!`)
                .addField(`Bạn không dùng được lệnh này.`)
                .setTimestamp()
            message.channel.send(Embed)
        }
    }
}