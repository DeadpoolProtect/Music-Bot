const { EmbedBuilder } = require("discord.js");

exports.help = {
    name: 'help',
    description: 'Affiche la liste des commandes disponibles.',
    usage: 'help'
}

exports.run = async (bot, message) => {
    const embed = new EmbedBuilder()
        .setColor(bot.config.clients.embedColor)
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo })

    message.delete().then(() => {
        embed.setTitle('**Liste des commandes**')
            .setDescription(`
                - clear : Supprime les messages
                - ban : Ban un utilisateur
                - invite : Inviter le bot
                - ping : Affiche le ping du bot
                - back : Retourne en arrière dans la file d'attente
                - clearmusique : Supprime la file d'attente
                - jump : Passe une musique
                - nowplaying : Affiche la musique en cours de lecture
                - pause : Met en pause la musique en cours de lecture
                - play : Joue une musique
                - resume : Reprise la musique en cours de lecture
                - shuffle : Mélange la file d'attente
                - skip : Passe à la musique suivante dans la file d'attente
                - stop : Arrête la musique
                - volume : Modifie le volume de la musique
            `);
        message.channel.send({ embeds: [embed] });
    });
}
