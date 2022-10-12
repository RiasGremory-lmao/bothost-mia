const verify = require('../resource/verify-role.json')

module.exports = {
    commands: 'rolesort',
    callback: (message, arguments, text) => {
        let member = message.member 
        if (!member.roles.cache.has(verify.Misc)) {
            member.roles.add([verify.Boost,verify.Level,verify.Misc,verify.Notify,verify.Special,verify.Staff,]).catch(console.error)
            message.channel.send(`Đã thêm phân loại role cho thành viên <@${member.id}>.`)
            return
        } else {
            message.channel.send(`Không thể thêm phân loại role của thành viên <@${member.id}>.`)
        }
    }
}