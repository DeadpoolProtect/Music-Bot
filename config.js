module.exports = {
    clients: {
        token: '',
        prefix: '+',
        activity: 'discord.gg/yrmWeTgbgn',
        name: 'Alexis BOT',
        logo: 'https://cdn.discordapp.com/attachments/1102575365391667330/1103614216050573342/aahah.png',
        embedColor: 'Blue'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Role-Name',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
