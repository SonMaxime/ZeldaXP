const { Collection } = require('discord.js');

module.exports = async (client, message,  messageReaction) => {
  const settings = await client.getGuild(message.guild);
  const dbUser = await client.getUser(message.member);

  if (message.author.bot) return;

  if (!dbUser) await client.createUser({
    guildID: message.member.guild.id,
    guildName: message.member.guild.name,
    userID: message.member.id,
    username: message.member.user.tag,
  });

  if (!message.guild.language) {
    const db = client.db;
    let language = db.has(`${message.guild.id}.language`) ? 
      await db.fetch(`${message.guild.id}.language`) :
      "fr";
    
    message.guild.language = require(`../../locales/${language}.json`);
  }

  const expCd = Math.floor(Math.random() * 19) + 1; // 1 - 20
  const expToAdd = Math.floor(Math.random() * 25) + 10; // 10 - 35

  if (expCd >= 8 && expCd <= 11) {
    await client.addExp(client, message.member, expToAdd);
  };

  const userLevel = Math.floor(0.04 * Math.sqrt(dbUser.experience));

  if (dbUser.level < userLevel) {
    message.reply(`bravo à toi, tu viens de monter niveau **${userLevel}** ! Incroyable!`);
    client.updateUser(message.member, { level: userLevel });
  };

  if (!message.content.startsWith(settings.prefix)) return;
  
  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("tu n'as pas les permissions pour taper cette commande.");

  if (command.help.args && !args.length) {
    let noArgsReply = `Il nous faut des arguments pour cette commande, ${message.author}!`;

    if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``;

    return message.channel.send(noArgsReply);
  };

  if (command.help.isUserAdmin && !user) return message.reply('il faut mentionner un utilisateur.');

  if (command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply("tu ne peux pas utiliser cette commande sur cet utilisateur.");

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  };

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\`.`);
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args, settings, dbUser);
}
