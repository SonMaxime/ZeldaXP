const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
  const settings = await client.getGuild(member.guild);

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag,
  });
}