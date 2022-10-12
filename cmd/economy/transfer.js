const economy = require('../../economy')

module.exports = {
    commands: 'pay',
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: "<Người nhận> <Điểm>",
    callback: async (message, args, text) => {
        const { guild, member } = message
        
        const target = message.mentions.users.first()
        if  (!target) {
            message.reply('Vui lòng nhập người nhận.')
            return
        }
        const coinsToGive = args[1]
        if (isNaN(coinsToGive)) {
            message.reply('Vui lòng nhập số điểm muốn chuyển.')
            return
        }

        const coinsOwned = await economy.getCoins(guild.id, member.id)
        if (coinsOwned < coinsToGive) {
            message.reply(`Bạn không có đủ ${coinsToGive} để chuyển! Số dư hiện tại: ${coinsOwned}`)
            return
        }

        const remainingCoins = await economy.addCoins(
            guild.id,
            member.id,
            coinsToGive * -1
        )

        const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)
        const user = message.author    
        message.channel.send(`<@${user.id}> đã chuyển cho <@${target.id}> ${coinsToGive} điểm! 
Người nhận hiện đang có ${newBalance} điểm.
Bạn còn lại ${remainingCoins} điểm.`)
    }
}