const MESSAGES = {
  COMMANDS: {
    XP: {
      CONFIG: {
        name: "config",
        aliases: ['configdb'],
        category: 'xp',
        description: "Modifie le `prefix` de votre serveur.",
        cooldown: 3,
        usage: 'prefix <valeur>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      EXP: {
        name: "exp",
        aliases: ['exp'],
        category: 'xp',
        description: "Renvoie l'expérience de l'utilisateur.",
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
      LEVEL: {
        name: "level",
        aliases: ['level'],
        category: 'xp',
        description: "Renvoie le niveau de l'utilisateur.",
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
      ADDXP: {
        name: "addxp",
        aliases: ['addexperience', 'addexp'],
        category: 'xp',
        description: "Ajoute de l'expérience de l'utilisateur.",
        cooldown: 10,
        usage: '<user> <amount_of_experience>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      REMOVEXP: {
        name: "removexp",
        aliases: ['removeexperience', 'remexp'],
        category: 'xp',
        description: "Enleve de l'expérience de l'utilisateur.",
        cooldown: 10,
        usage: '<user> <amount_of_experience_',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      LEADERBOARD: {
        name: "leaderboard",
        aliases: ['lead', 'classement', 'class'],
        category: 'xp',
        description: "Affiche le clasement (Top 3) des membres sur le serveur.",
        cooldown: 30,
        usage: '',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
      EVAL: {
        name: "eval",
        aliases: ['eval'],
        category: 'xp',
        description: 'Tester un code javascript(owner only). En cas de problème sur un serveur, tapez client.emit("guildCreate", message.guild), Pour activer les niveaux, tapez client.emit("guildMemberAdd", message.member) sinon, se rendre sur le serveur du créateur : https://discord.gg/jx2U5qr',
        cooldown: 3,
        usage: '<code_to_test>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      HELP: {
        name: "help",
        aliases: ['help'],
        category: 'xp',
        description: "Renvoie une liste de commandes ou les informations sur une seule.",
        cooldown: 3,
        usage: '<command_name>',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
    },
  }
}

exports.MESSAGES = MESSAGES