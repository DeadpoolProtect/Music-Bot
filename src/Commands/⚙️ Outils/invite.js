const { EmbedBuilder } = require("discord.js");

exports.help = {
    name: 'invite',
    description: 'Obtient un lien d\'invitation pour ajouter le bot à un serveur Discord.',
    usage: 'invite'
}

exports.run = async (bot, message) => {
    const inviteLink = `https://discord.com/oauth2/authorize?client_id=1025079577447514215&scope=bot`;
    const embed = new EmbedBuilder()
        .setColor(bot.config.clients.embedColor)
        .setTitle('Invitation du bot')
        .setDescription(`Cliquez [ici](${inviteLink}) pour ajouter le bot à votre serveur.`);
    message.channel.send({ embeds: [embed] });
}
