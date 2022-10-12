const mongo = require('../mongo')
const command = require('../cmd.js')
const welcomeSchema = require('../schema/welcome-schema')
const { Mongoose } = require('mongoose')
const { Guild } = require('discord.js')
module.exports =  (client) => {
    
    const cache = {} 

    command(client ,'setwelcome', async (message) => {
        const { member, channel, content, guild } = message

        if (!message.member.permissions.has('ADMINISTRATOR')) {
            channel.send('Bạn không có quyền chạy lệnh này.')
            return
        }
        
        let text = content 
        
        const split = text.split(' ')

        if (split.length < 2) {
            channel.send('Hãy nhập lời chào mừng.')
            return
        }

        split.shift()
        text = split.join(' ')

        cache[guild.id] = [channel.id, text]

        await mongo().then(async (mongoose) => {
            try {
                await welcomeSchema.findOneAndUpdate(
                {
                    _id: guild.id,
                }, {
                    _id: guild.id,
                    channelId: channel.id,
                    text,
                }, {
                    upsert: true
                })
            } finally {
                mongoose.connection.close()
            }
        message.channel.send(`Đã đổi lời chào mừng thành công.`)
        })
    })

    const onJoin = async member => {
        const { guild } = member

        let data = cache[guild.id]

        if (!data) {
            console.log('Fetching from database...')
            
            await mongo().then(async mongoose => {
                try {
                    const result = await welcomeSchema.findOne({ _id: guild.id })

                    cache[guild.id] = data = [result.channelId, result.text]
                } finally {
                    mongoose.connection.close()
                }
            })
        }

        const channelId = data[0]
        const text = data [1]

        const channel = guild.channels.cache.get(channelId)
        channel.send(text.replace(/<@>/g, `<@${member.id}>`))
    }

    command(client, 'welcometest', message => {
        onJoin(message.member)
    })

    client.on('guildMemberAdd', member => {
        onJoin(member)
    })
}