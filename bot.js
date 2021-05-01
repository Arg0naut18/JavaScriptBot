const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!';
require('dotenv').config();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
const commandHandler = require('./commands.js')
client.on('message', commandHandler);

client.login(process.env.BOTTOKEN);