module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(`${user} possède ${mentionnedUser.experience} points d'expérience!`);
  } else {
    message.reply(`tu possèdes ${dbUser.experience} points d'expérience!`);
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