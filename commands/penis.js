exports.run = (client, message) => {
    message.channel.send('**Verificam lungimea penis-ului**! :warning:')
      .then(msg => {
        msg.edit(`** Lungimea penis-ului este de ${msg.createdTimestamp - message.createdTimestamp} cm!** `);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'penis',
    description: '^penis',
    usage: '^penis'
  };
  