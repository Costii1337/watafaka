const Discord = require("discord.js");
const moment = require("moment");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline"
};

module.exports.run = async (bot, message, args) => {
 let iUser = message.mentions.users.first() || message.author;
 let game = "game"
if (!iUser.presence.game) {
game = "None"
} else {
game = iUser.presence.game.name
}

if(iUser.bot === true) {
  let bot;
  bot = 'Da'
} else {
  bot = 'Nu'
}

let nitro;
if(iUser.avatar.includes("a_")) {
  nitro = 'Da'
} else {
  nitro = 'Da'
}

let dev;
if(iUser.id === "421724379450441729") {
  dev = 'Da'
} else {
  dev = 'Nu'
}

const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setThumbnail(`${iUser.avatarURL}`)
.setAuthor(`${iUser.tag}`, `${iUser.avatarURL}`)
.addField("» Nume", `${message.guild.members.get(iUser.id).nickname !== null ? `${message.guild.members.get(iUser.id).nickname}` : "No nickname"}`, true)
.addField("» Robot", `${bot}`, true)
.addField("» Developer Bot", `${dev}`, true)
.addField("» Utilizator Nitro", `${nitro}`, true)
.addField("» Status", `${status[iUser.presence.status]}`, true)
.addField("» Playing", `${iUser.presence.game ? `${iUser.presence.game.name}` : "not playing anything."}`, true)
.addField("» Roluri", `${message.guild.members.get(iUser.id).roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
.addField("» Joined", `${moment.utc(iUser.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
.addField("» Creat pe", `${moment.utc(iUser.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

message.channel.send({embed});
}

module.exports.help = {
  name:"userinfo"
}
