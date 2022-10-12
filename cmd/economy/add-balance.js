const economy = require('../../economy')

module.exports = {
    commands: ['ap', 'addpoint'],
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: "<Người nhận> <Số tiền>",
    permissionError: 'Cần quyền Admin để dùng lệnh.',
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments) => {
      const mention = message.mentions.users.first()
  
      if (!mention) {
        message.reply('Nhập tên người nhận!')
        return
      }
  
      const coins = arguments[1]
      if (isNaN(coins)) {
        message.reply('Nhập số tiền!')
        return
      }
  
      const guildId = message.guild.id
      const userId = mention.id
  
      const newCoins = await economy.addCoins(guildId, userId, coins)
  
      message.reply(
        `Bạn đã chuyển cho <@${userId}> ${coins} điểm. Người ấy hiện đang có ${newCoins} điểm!`
      )
    },
}