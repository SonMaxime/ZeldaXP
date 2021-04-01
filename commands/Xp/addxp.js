module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToAdd = parseInt(args[1]);
  if (isNaN(expToAdd)) return message.reply("faut entrer un nombre.");
  client.addExp(client, user, expToAdd);
  message.channel.send(message.guild.langauge.vousAvezAjoute + ` ${expToAdd}` + message.guild.langauge.pointsUser + `${user}!`);
};

module.exports.help = {
  name: "addxp",
  aliases: ['addexperience', 'addexp'],
  category: 'xp',
  description: "Ajoute de l'expérience de l'utilisateur.",
  cooldown: 10,
  usage: '<user> <amount_of_experience>',
  isUserAdmin: false,
  permissions: true,
  args: true
}