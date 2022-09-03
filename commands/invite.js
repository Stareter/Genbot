const Discord = require("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**__INVITE REWARDS__**')
    .setImage("https://cdn.discordapp.com/attachments/999045761830486136/1003665979903062118/CSGOBOLT-removebg-preview_1.png")
.setDescription (` \n \n \n **3 Invites = 5% off all products**  <:white_check_mark:1005171326685806622> \n \n **5 Invites = 10% off all products**  <:white_check_mark:1005171326685806622> \n  \n **7 Invites = 15% off all products**  <:white_check_mark:1005171326685806622> \n \n **10 Invites = 20% off all products** <:white_check_mark:1005171326685806622> \n \n *WEBSITE:* http://csgobolt.tk`)

  message.channel.send(embed);
};
module.exports.help = {
  name: 'invite'
};




