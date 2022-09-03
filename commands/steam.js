const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/steam.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/steam.txt', lines.slice(1).join('\n'), function(err) {
            });

            let embed = new Discord.MessageEmbed()
            .addField('Here Is Your Steam Acc!',`\n**${account}**`)
            .setColor("#363940")
            .setTimestamp();

            msg.author.send(embed);

var xd = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("CHECK YOUR DMs i have send a Steam acc")
      
        .setImage("https://cdn.discordapp.com/attachments/848298340491722815/848323916074319872/gifgit.gif")
        .setTimestamp()
        .setDescription("I've sent you a Steam acc")

                
msg.reply(xd).then(m => {
                    setTimeout(() => {
                    }, 900000);
                });

	
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
		});
    }
};

module.exports.help = {
    name: `steam`,
    description: `Sends you a Steam acc`
    };