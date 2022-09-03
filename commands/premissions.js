const Discord = require('discord.js');
const bot = new Discord.Client();
let targetChannelId = '848329433161269299';
bot.on('ready', () => {
    console.log(`${bot.user.tag} is ready on ${bot.guilds.cache.size} servers!`);
});

bot.on('message', (message) => {
    if (message.content === 'test') {
        message.channel.send(`i\`m await of reactions on this message`).then((msg) => {
            const filter = (reaction, user) => !user.bot;
            const collector = msg.createReactionCollector(filter);
            collector.on('collect', (reaction, user) => {
                let channel = message.guild.channels.cache.get(targetChannelId);
                if (channel) {
                    let embed = new Discord.MessageEmbed();
                    embed.setAuthor(
                        user.tag,
                        user.displayAvatarURL({
                            dynamic: true,
                            format: 'png',
                        }),
                    );
                }
                embed.setDescription(`${user} (${user.tag}) has react a: ${reaction.emoji}`);
                channel.send(embed);
            });
            collector.on('end', (reaction, reactionCollector) => {
                msg.reactions.removeAll();
            });
        });
    }
});