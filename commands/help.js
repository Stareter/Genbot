const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('INFORMATION')
	.setDescription**(`**WELCOME TO CSGOBOLT.TK** \n \n ***ALL OUR ACCOUNTS / SERVICES ARE \N CHEAP & FAST & SECURE __14 DAYS WARRANTY__*** \n \n **WE ARE CURRENTLY PROVIDING FOLLOWING ACCOUNTS / SERVICES:** \n **GTA 5 ACCOUNTS** \n **ORIGIN ACCOUNTS** \n **STEAM ACCOUNTS** \n **CSGO SKINS** \n **STEAM SERVICES** \n **TIKTOK SERVICES** \n **YOUTUBE SERVICES** \n **DISCORD SERVERS** \n **DISCORD PREMIUM BOTS** \n **IF YOUR INTERESTED IN ANY ACCOUNT / SERVICES PLEASE DM ME FOR ANY QUESTIONS OR PAYMENTS** \N *WEBSITE:*`)
.setImage ("https://cdn.discordapp.com/attachments/848298340491722815/848319085288751125/standard_7.gif")

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}