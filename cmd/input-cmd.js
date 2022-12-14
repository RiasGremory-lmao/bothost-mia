const fs = require('fs')
const path = require('path')

module.exports = (client) => {
    const baseFile = 'cmd-base.js'
    const commandBase = require(`./${baseFile}`)

    const commands = []

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commands.push(option)
                if (client) {
                commandBase(client, option)
                }
            }
        }
    }

    readCommands('.')

    return commands
}