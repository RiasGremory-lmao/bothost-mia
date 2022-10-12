module.exports = {
    commands: 'ping',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) =>  {
        const author = message.author
        const PingRep = ["Không liên quan nhưng đồng râm đã like Fanpage TsukiKodo chưa? https://www.facebook.com/TsukiKodo'", `<@${author.id}> này, cậu đã like Fanpage TsukiKodo chưa? https://www.facebook.com/TsukiKodo'`]
        const randomPing = PingRep[Math.floor(Math.random() * PingRep.length)]
        message.channel.send(randomPing)
    }
}