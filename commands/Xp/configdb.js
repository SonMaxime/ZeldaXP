module.exports.run = async (client, message, args, settings) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch(getSetting) {
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(message.guild.language.prefix + ` \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.prefixActual + ` \`${settings.prefix}\``);
      break;
    }
  }
};

module.exports.help = {
  name: "config",
  aliases: ['configdb'],
  category: 'xp',
  description: "Modifie le `prefix` de votre serveur.",
  cooldown: 3,
  usage: 'prefix <valeur>',
  isUserAdmin: false,
  permissions: true,
  args: true
}
