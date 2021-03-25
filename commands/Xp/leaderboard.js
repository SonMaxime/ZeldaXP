const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message) => {
  const embed = new MessageEmbed()
    .setTitle("Top 3 des utilisateurs sur le serveur")
    .setColor("#a41f14")
    .setTimestamp()
    .setFooter("Experience")

  await client.getUsers(message.guild).then(p => {
    p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 3).forEach(e => {
      embed.addField(e.username, `${e.experience} points d'expérience - Niveau ${e.level}`);
    });
  });

  message.channel.send(embed);

};

module.exports.help = {
  name: "leaderboard",
  aliases: ['lead', 'classement', 'class'],
  category: 'xp',
  description: "Affiche le clasement (Top 3) des membres sur le serveur.",
  cooldown: 30,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}