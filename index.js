//variaveis
const Discord = require('discord.js')
const bot = new Discord.Client({ disableEveryone: true })
const { GOOGLE_KEY, DISCORD_TOKENS } = require('./config')
const prefix = '/'
const ytdl = require('ytdl-core')
const Youtube = require('simple-youtube-api')
const youtube = new Youtube(GOOGLE_KEY)
const cheerio = require('cheerio')
const request = require('request')
const moment = require('moment')
require('moment-duration-format')
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


/////// MENSAGENS ///////
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
        msg.reply('tudo bem, e vc?')
    }
})
///////////////
bot.on('message', (msg) => {
    let args = msg.content.substring(prefix.length).split(" ")

    switch (args[0]) {
        case 'fofo':
            imagem(msg)
            break;
    }
})
function imagem(msg) {
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cat",
        method: "GET",
        headers: {
            "accept": "text/html",
            "user-agent": "chrome"
        }
    }
    request(options, function (error, response, responseBody) {
        if (error) {
            return
        }

        $ = cheerio.load(responseBody)
        var links = $(".image a.link")
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

        console.log(urls)
        if (!urls.length) {
            return
        }
        msg.channel.send(urls[Math.floor(Math.random() * urls.length)])
    })
}


//incia o bot
bot.on('ready', () => {
    console.log(`bot funcionando na versao ${version}`)

    //client.channels.find(x => x.name === 'geral').send('sim')
})
//token
bot.login(DISCORD_TOKENS)