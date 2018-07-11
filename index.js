const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const tokenfile = ("./token.json")
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('guildMemberAdd', member => {
  member.guild.channels.get("466247151819948043").setName(`👤 Membrii: ${member.guild.memberCount}`)

  member.guild.channels.get("466247333428854794").setName(`⭐ Newest: ${member.user.username}`)

    let canal = member.guild.channels.find('id', '459763881603104770');
    canal.send("[``+``] " + member.user.tag + "");
});

bot.on('guildMemberRemove', member => {
  member.guild.channels.get("466247151819948043").setName(`👤 Membrii: ${member.guild.memberCount}`)

  member.guild.channels.get("466247333428854794").setName(`⭐ Newest: ${member.user.username}`)

    let canal = member.guild.channels.find('id', '459763881603104770');
    canal.send("[``-``]" + member.user.tag + "");
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  const ceva = ["https://", "http://", "www.", "discord.gg", ".gg", ".rip", ".me"];
  if(ceva.some(cuvant => message.content.includes(cuvant)) ) {
    if(message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(" :tools: | **Reclama nu e permisa, pe server!** " + message.author + ".");
   message.delete();
 }
  if(message.content.indexOf("-") !== 0) return;

  let prefix = "-";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


});

bot.login('token bot')
