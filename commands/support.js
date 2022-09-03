const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Support')
	.setDescription(`This bot is coded BY Syskey#8472 on discord. \n Dm me on discord if you want to buy the bot stacked with accounts!`)
.setImage("https://cdn.discordapp.com/attachments/848298340491722815/848319085288751125/standard_7.gif")


message.channel.send(embed);
}
module.exports.help = {
  name: 'support'
}