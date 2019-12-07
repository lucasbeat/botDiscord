const Discord = require('discord.js')
const token = 'NjUyODU5NTI4MTgxNzEwODU4.XeulCQ.taFz5ihpSQoAcCFOF-0AW03yy1k'

const client = new Discord.Client()

client.on('message', (msg) => {
    if (msg.content === '!teste') {
        msg.channel.send(`eae guei ${msg.author}`)
    }
    if (msg.content === '!crack') {
        msg.channel.send(`eu fumo crack`)
    }
    if (msg.content === '-eae') {
        msg.channel.send(`eae guei ${msg.author}`)
    }
})

client.on('ready', () => {
    console.log('bot esta funcionando')

    //client.channels.find(x => x.name === 'geral').send('sim')
})

client.login(token)