module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(`${user}` + message.guild.language.possède + `${mentionnedUser.experience}` + message.guild.language.xpInSave);
  } else {
    message.reply(message.guild.language.uHave + ` ${dbUser.experience} ` + message.guild.language.possède);
  }
};

module.exports.help = {
  name: "exp",
  aliases: ['exp'],
  category: 'xp',
  description: "Renvoie l'expérience de l'utilisateur.",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}