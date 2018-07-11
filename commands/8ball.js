const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

   if(!args[0]) {
     message.channel.send(` :tools: | **Intreaba-ma ceva**.`);
     return;
   };

  let responses = [
  `Da`,
  `Nu`,
  `Probabil`,
  `Habar nu am`,
  `Undeva pe acolo`,
  `chiar`,
  `Intreaba din nou`,
  `Ce`
 ]


 if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
   message.channel.send(`:8ball: **| ${responses[Math.floor(Math.random() * responses.length)]}, ${message.author.username}**`);
   return;
 }

    const embed = new Discord.RichEmbed()
    .setColor(message.guild.members.get(bot.user.id).displayHexColor)
    .setTitle(`:8ball: | ${responses[Math.floor(Math.random() * responses.length)]}, ${message.author.username}`)
    message.channel.send({embed: embed});
};

module.exports.help = {
  name: '8ball'
}
