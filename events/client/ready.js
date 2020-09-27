module.exports = client => {
  console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs du serveur!`);

  let activities = ['.help', `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, `sur ${client.guilds.cache.size.toString()} serveurs`], i = 0;

  setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'PLAYING' }, status: 'dnd' }), 3000);
}