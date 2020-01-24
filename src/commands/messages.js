const { PREFIX } = require('../config/config')

function botMsg(msg) {
    if (msg.content === `${PREFIX}test`) {
        msg.reply('funcionando')
    }
    if (msg.content === `${PREFIX}oi`) {
        msg.reply('oi')
    }
}

module.exports = botMsg