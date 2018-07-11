exports.run = async (client, message, args, level) => {
if (message.author.id == "421724379450441729") {
var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "WATCHING"});
let embed = new RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`${nameResult} is now my new Playing Game. (Set as WATCHING)`)
message.channel.send(embed)
} else {
  let embed2 = new RichEmbed()
  .setTitle("Comanda este restricitionata pentru Owner.")
  message.channel.send(embed2)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "setWatching",
  category: "Owner",
  description: "seteaza status-ul bot-ului (Dev Only)",
  usage: "^setwatching"
};