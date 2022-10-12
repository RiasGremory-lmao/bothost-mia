module.exports = {
    commands: 'say',
    permissions: ['MANAGE_MESSAGES'],
    callback: (message, args) => {
        const msay = args.join(' ')
        message.delete()
        message.channel.send(`${msay}`)
    }
}