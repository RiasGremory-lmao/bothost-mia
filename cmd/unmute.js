const Discord = require('discord.js')

module.exports = {
    commands: 'unmute',
    callback: (message, arguments, text) => {
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Crescent Moon');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);

            let Embed = new Discord.MessageEmbed()
              .setColor('#e6b58c')
              .setTitle(`Chứng nhận trở về đất liền`)
              .addField(`Được cấp bởi`, `<@${message.author.id}>`)
              .addField(`Người trở về`, `<@${memberTarget.user.id}>`)
              .setTimestamp();

            message.channel.send(Embed)
        } 
        else{
        message.channel.send('Tù nhân không hợp lệ.');
        }    
    },
    permissions: ['MANAGE_ROLES']   
}
