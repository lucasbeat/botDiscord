/*
TOCA MUSICA VIA URL

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")

    switch (args[0]) {
        case 'play':
            //funcao main do bot
            function play(connection, message) {
                var server = servers[message.guild.id]

                server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter: 'audioonly' }))
                server.queue.shift()
                server.dispatcher.on('end', () => {
                    if (server.queue[0]) {
                        play(connection.message)
                    } else {
                        connection.disconnect()
                    }
                })
            }


            if (!args[1]) {
                message.channel.send('tem que digitar a url certa, guei')
                return
            }
            if (!message.member.voiceChannel) {
                message.channel.send('precisa ta em uma sala de voz pra tocar, guei')
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id]

            server.queue.push((args[1]))

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
                play(connection, message)
            })


            break;

        case 'skip':
            var server = servers[message.guild.id]
            if (server.dispatcher) server.dispatcher.end()
            message.channel.send('pulando a musica')
            break

        case 'stop':
            var server = servers[message.guild.id]
            if (message.guild.connection) {
                for (var i = server.queue.length - 1; i >= 0; i--) {
                    server.queue.splice(i, 1)
                }

                server.dispatcher.end()
                message.channel.send('queue acabou, vou sair do canal de voz')
                console.log('para a queue')

            }
            if (message.guild.connection) message.guild.voiceConnection.disconnect()

            break
    }

})

*/