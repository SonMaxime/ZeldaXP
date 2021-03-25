module.exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string") 
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== "492402867953467392") return;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = {
  name: "eval",
  aliases: ['eval'],
  category: 'xp',
  description: 'Tester un code javascript(owner only). En cas de problème sur un serveur, tapez client.emit("guildCreate", message.guild), Pour activer les niveaux, tapez client.emit("guildMemberAdd", message.member) sinon, se rendre sur le serveur du créateur : https://discord.gg/jx2U5qr',
  cooldown: 3,
  usage: '<code_to_test>',
  isUserAdmin: false,
  permissions: true,
  args: true
}
