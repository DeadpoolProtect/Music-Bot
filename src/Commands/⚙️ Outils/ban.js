const { EmbedBuilder } = require("discord.js");

exports.help = {
    name: 'ban',
    description: 'Bannit un membre du serveur Discord.',
    usage: 'ban <mention> [raison]'
}

exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
        return message.channel.send("Vous n'avez pas la permission de bannir des membres !");
    }
    const member = message.mentions.members.first();
    if (!member) {
        return message.channel.send("Veuillez mentionner un membre à bannir !");
    }
    if (member.bannable === false) {
        return message.channel.send("Je ne peux pas bannir ce membre !");
    }
    const reason = args.slice(1).join(' ') || 'Aucune raison spécifiée';
    await member.ban({ reason });
    const embed = new EmbedBuilder()
        .setColor(bot.config.clients.embedColor)
        .setTitle('Bannissement')
        .setDescription(`${member} a été banni par ${message.author} pour la raison suivante : ${reason}`);
    const modChannel = message.guild.channels.cache.find(channel => channel.name === bot.config.clients.modLogChannel);
    if (modChannel) {
        modChannel.send({ embeds: [embed] });
    }
    message.channel.send(`${member} a été banni pour la raison suivante : ${reason}`);
}
