//variaveis
const Discord = require('discord.js')
const bot = new Discord.Client()
const { GOOGLE_KEY, DISCORD_TOKENS } = require('./config')
const prefix = '/'
const ytdl = require('ytdl-core')
const Youtube = require('simple-youtube-api')
const youtube = new Youtube(GOOGLE_KEY)
let pronto = false
var version = '1.0'
////////////////////////////////////////


bot.on('message', (msg) => {
    if (msg.content === `${prefix}entre`) {

        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join();
            pronto = true
        } else {
            msg.channel.send('precisa estar conectado ao canal de voz')
        }
    } else if (msg.content === `${prefix}saia`) {
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.leave()
            pronto = false
        } else {
            msg.channel.send('precisa estar conectado ao canal de voz')
        }

    } else if (msg.content.startsWith(`${prefix}play`)) {
        if (pronto) {
            let oTocar = msg.content.replace(`${prefix}play`, '')
            if (ytdl.validateURL(oTocar)) {
                msg.member.voiceChannel.connection.playStream(ytdl(oTocar))
            } else {
                msg.channel.send('link invalido')
            }
        }
    }
})

bot.on('message', (msg) => {
    if (msg.content === `${prefix}eae`) {
        msg.reply('eae')
    }
})
bot.on('message', (msg) => {
    if (msg.content === `${prefix}oi`) {
        msg.reply('oi')
    }
})

bot.on('message', (msg) => {
    if (msg.content === `${prefix}tranquilo?`) {
        msg.reply('to nao guei, vai tomar no cu')
    }
})

//incia o bot
bot.on('ready', () => {
    console.log(`bot funcionando na versao ${version}`)

    //client.channels.find(x => x.name === 'geral').send('sim')
})
//token
bot.login(DISCORD_TOKENS)