const run = module.exports.run = async (client, msg, args) => {
    const info = [
        '**__ Botinfo __**',
        '',
        '``Bot-ul este in:``',
        '',
		'Creatorul bot-ului este **CostiiCNT.#0001** :tada:',
		'',
        `• este in **${client.guilds.size}** servere.`,
        `• monitorizeaza **${client.channels.size}** canale.`,
        `• si **${client.users.size}** useri.`
    ].join('\n');
    msg.channel.send(info);
}

module.exports.help = {
  name: "botinfo"
}