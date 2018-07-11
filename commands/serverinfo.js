const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${day}.${month}.${year}`)
   .setColor("#00edff")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Detinator", message.guild.owner.user.tag, true)
   .addField("Regiune", message.guild.region, true)
   .addField("Canale", message.guild.channels.size, true)
   .addField("Membrii", message.guild.memberCount, true)
   .addField("Boti", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roluri", message.guild.roles.size, true);
   message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"
  }