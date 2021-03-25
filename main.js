const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { Database } = require("bookman");

const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'MEMBER'],
    restTimeOffset: 0
});
require("./util/functions")(client);
client.config = require("./config");
client.queue = new Map();
client.mongoose = require("./util/mongoose");
client.db = new Database("database/languageGuild.json");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(client.config.TOKEN);