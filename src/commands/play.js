const ytdl = require('ytdl-core')
const PREFIX = require('../config/config')
let pronto = false

function playMusic(msg) {
    if (msg.content === `${PREFIX}entre`) {

        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join();
            pronto = true
        } else {
            msg.channel.send('precisa estar conectado ao canal de voz')
        }
    } else if (msg.content === `${PREFIX}saia`) {
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.leave()
            pronto = false
        } else {
            msg.channel.send('precisa estar conectado ao canal de voz')
        }

    } else if (msg.content.startsWith(`${PREFIX}play`)) {
        if (pronto) {
            let oTocar = msg.content.replace(`${PREFIX}play`, '')
            if (ytdl.validateURL(oTocar)) {
                msg.member.voiceChannel.connection.playStream(ytdl(oTocar))
            } else {
                msg.channel.send('link invalido')
            }
        }
    }
}

module.exports = playMusic
