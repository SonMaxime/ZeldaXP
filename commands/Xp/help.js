const { MessageEmbed } = require("discord.js");
const { Menu } = require('discord.js-menu');
const { readdirSync } = require("fs");
const { MESSAGES } = require("../../util/constants");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings) => {
  if (!args.length) {
    new Menu(message.channel, message.author.id, [
        {
            name: "main",
            content: new MessageEmbed({
                title: "Help :",
                description: "Une liste de commande et leur sous catégories !",
                fields: [
                    {
                        name: "Fonctionnement :",
                        value: "Utilisez les réactions en dessus de ce embed pour naviguer entre les catégories de commande ! Si vous voulez plus d'infos sur l'utilisation des commandes, utilisez la commande `(préfix de votre serveur)help <nom de la commande>`."
                    }
                ]
            }),
            reactions: {
                "⏹": "stop",
                "▶": "next"
            }
        },
        {
            name: "otherPage",
            content: new MessageEmbed({
                title: "Help :",
                fields: [
                    {
                        name: "Utilisez les réactions en dessus de ce embed pour naviguer entre les catégories de commande ! Si vous voulez plus d'infos sur l'utilisation des commandes, utilisez la commande `(préfix de votre serveur)help <nom de la commande>`.",
                        value: "`addxp`, `exp`, `leaderboard`, `level` et `removexp`."
                    }
                ]
            }),
            reactions: {
                "⏹": "stop",
                "◀": "previous",
                "1️⃣": "first"
            }
        }
    ]);

  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("cette commande n'existe pas!");

    const embed = new MessageEmbed()
      .setColor("#36393F")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description} (cd: ${command.help.cooldown}secs)`)
      .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)
      .setFooter(`Permission: ${command.help.permissions ? "Admin uniquement" : "Tout le monde peut utiliser"}`)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.XP.HELP;