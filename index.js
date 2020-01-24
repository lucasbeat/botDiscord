const Discord = require('discord.js')
const bot = new Discord.Client({ disableEveryone: true })
const botMsg = require('./src/commands/messages')
const { PREFIX, DISCORD_TOKENS } = require('./src/config/config')
const playMsu = require('./src/commands/play')
const cheerio = require('cheerio')
const request = require('request')
require('moment-duration-format')
////////////////////////////////////////


/////// TOCAR MUSICA /////
bot.on('message', playMsu)

/////// MENSAGENS ///////
bot.on('message', botMsg)

////// BUSCAR IMAGENS /////
bot.on('message', (msg) => {
    let args = msg.content.substring(PREFIX.length).split(" ")

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
    var version = '1.0'

    console.log(`bot funcionando na versao ${version}`)

    //client.channels.find(x => x.name === 'geral').send('sim')
})
//token
bot.login(DISCORD_TOKENS)