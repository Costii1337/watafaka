const Discord = require ('discord.js');
exports.run = (client, message, args) => {
 
    const embed = new Discord.RichEmbed()
    .setTitle(`**AnoBot**`) 
    .addField('^help', 'vezi lista de comenzi')
    .addField('^ping', 'vezi ping-ul bot-ului')
    .addField('^avatar', 'vezi avatarul tau/lui')
    .addField('^rolldice', 'un joculetz.')
    .addField('^stats', 'Informatiile despre bot.')
    .addField('^botinfo', 'Info-ul despre bot (creat pe,nume bot)')
    .addField('^say', 'comanda4fun')
    .addField('^bigtext', 'comanda4fun')
    .addField('^serverinfo', 'info-ul server-ului')
    .addField('^ship', 'un joc pentru distractie (relatie)')
    .addField('^setwatching', 'schimbi status-ul bot-ului! (Developer Only)')
    
         .setTimestamp()
     .setColor(0x00FFFF)
    message.author.send({embed : embed});

    message.author.send(":link: **Pentru support-ul acordat intra aici. : [https://discord.gg/jEVuSXy]** \n\ si nu uita la fiecare comanda sa pui prefixul ``^`` \n\ **Multumesc de atentia acordata: ***:gift:");
    
 message.channel.send(":link: ***Uita-te in Privat. :gift:  !***");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: 'help',
    description: 'Comenzile bot-ului ** AnoBot :tada: **',
    usage: '^help'
  };