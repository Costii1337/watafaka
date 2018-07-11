exports.run = (client, message) => {
    message.channel.send('ping is processing..')
      .then(msg => {
        msg.edit(`:black_small_square: Ping-ul Bot-ului este... **${msg.createdTimestamp - message.createdTimestamp}**! :trophy:  `);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command. I wonder what this does? /sarcasm',
    usage: '^ping'
  };
  