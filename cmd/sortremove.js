const verify = require('../resource/verify-role.json')

module.exports = {
    commands: 'sortremove',
    callback: (message, arguments, text) => {
        let member = message.member 
        if (member.roles.cache.has(verify.Misc)) {
            member.roles.remove([verify.Boost,verify.Level,verify.Misc,verify.Notify,verify.Special,verify.Staff,]).catch(console.error)
            message.channel.send(`Đã xoá phân loại role cho thành viên <@${member.id}>.`)
            return
        } else {
            message.channel.send(`Không thể xoá phân loại role của thành viên <@${member.id}>.`)
        }
    }
}