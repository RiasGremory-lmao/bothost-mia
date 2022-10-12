const verify = require('../resource/verify-role.json')

module.exports = {
    commands: 'verify',
    callback: (message, arguments, text) => {
        let member = message.member 
        if (!member.roles.cache.has(verify.Checked)) {
            member.roles.add([verify.Checked]).catch(console.error)
            message.channel.send(`Đã xác minh quyền công dân cho thành viên <@${member.id}>.`)
        } else {
            message.channel.send(`Không thể cấp quyền công dân cho thành viên <@${member.id}>.`)
        }
    }
}