const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":tools: | iti trebuie permisiunea 'MANAGE_MESSAGES' sa poti folosi comanda.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send(":tools: | Mentioneaza un membru.");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.channel.send(" :tools: | doar cei cu premisiunea  ||**ADMINISTRATOR**|| ,pot da mute.");
  let muterole = message.guild.roles.find(`name`, "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#a53145",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send(":tools: | specifica un timp (``minute,ore,zile``).");

  await(tomute.addRole(muterole.id));
  message.channel.send(`➥ User ${tomute.user.tag} a primit mute cu succes.`)

  setTimeout(function(){
    tomute.removeRole(muterole.id);
  }, ms(mutetime));


}

module.exports.help = {
  name: "mute"
}

