exports.help = {
    name: 'clear',
    description: 'Supprime un certain nombre de messages dans le canal.',
    usage: 'clear <nombre>'
}

exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
        return message.channel.send("Vous n'avez pas la permission de supprimer des messages !");
    }
    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount < 1 || amount > 100) {
        return message.channel.send("Veuillez entrer un nombre entre 1 et 100.");
    }
    await message.channel.bulkDelete(amount);
    message.channel.send(`**${amount}** messages ont été supprimés.`);
}
