const Discord = require('discord.js')

module.exports = {
    commands: 'svinfo',
    callback: (message, args) => {
        const { guild } = message
        const { name, region, memberCount, ownerID, verificationLevel, premiumTier } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle(`Thông tin về server **${name}**`)
        .setThumbnail(icon)
        
        .addFields(
            { name: 'Số thành viên:', value: memberCount },
            { name: 'Chủ sở hữu:', value: `<@${ownerID}>`},
            { name: 'Mức độ bảo mật', value: verificationLevel },
            { name: 'Cấp độ server', value: premiumTier }
        )
        message.channel.send(embed)
    }
}
