module.exports = {
    commands: ['members','memberinfo'],
    desc: 'Member counter.',
    callback: (message, args) => {
        client.guilds.cache.forEach((guild) => {
        message.channel.send(`**${guild.name}** hiện đang có **${guild.memberCount}** thành viên.`)
        })
    }
}
