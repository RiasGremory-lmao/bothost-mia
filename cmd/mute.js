const ms = require('ms');
const Discord = require('discord.js')

module.exports = {
    commands: 'mute',
    callback: (message, args, text) => {
        const target = message.mentions.users.first();
        if (target) {
 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Crescent Moon');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> óc chó!!!`);
                    return
            }
            memberTarget.roles.add(muteRole.id);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));

            let Reason = args.slice(2).join(" ");

            let Embed = new Discord.MessageEmbed()
              .setColor('#e6b58c')
              .setTitle(`Im lặng tạm thời:`)
              .addField(`Người phán xử`, `<@${message.author.id}>`)
              .addField(`Bị cáo`, `<@${memberTarget.user.id}>`)
              .addField(`Nguyên nhân phạm tội`, `${Reason || "Không có"}`)
              .addField(`Thời gian:`, `${ms(ms(args[1]))}`)
              .setTimestamp();
                        
            message.channel.send(Embed)

        }
        else {
        message.channel.send('Không có ai để mute cả')
        }
    },
    permissions: ['MANAGE_ROLES'],
    requiredRoles: []
}