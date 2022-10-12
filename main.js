const Discord = require('discord.js')
const client = new Discord.Client().setMaxListeners(0)


const config  = require('./config.json')
const mongo = require('./mongo')
const welcome = require('./cmd/welcome')
const inputCmd = require('./cmd/input-cmd')

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}.`)
    client.user.setPresence({
        status: "online", 
        activity: {
            name: "Tearmoon Teikoku!",  
            type: "PLAYING" 
        }
    })

    inputCmd(client)

    welcome(client)

    await mongo().then((mongoose) => {
        try {
            console.log('Connected to Mongo.')
        } finally {
            mongoose.connection.close()
        }
    })
})
client.login(config.token)
