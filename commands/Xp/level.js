const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args, settings, dbUser) => {
  const embed = new MessageEmbed()
  .setTitle(`Level de ${message.author.username}`)
  .setColor("#dc143c")
  .addField(`${dbUser.level}`)
  .setFooter(`Level Discord via cloud.mongodb.com`, message.author.displayAvatarURL())

  message.channel.send(embed)
};

module.exports.help = {
  name: "level",
  aliases: ['level'],
  category: 'xp',
  description: "Renvoie le niveau de l'utilisateur.",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}