const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const devid = 436844058217021441;
const dev = client.users.cache.get(devid);
const camp_name = "Ɖɨʋɨռɛ";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
module.exports = async function (msg) {
    let msg = `Thanks for you're concern. I am a bot developed by ${dev} to help our campmates here in ${camp_name}. Any trouble, DM me.`;
    const embed = new Discord.MessageEmbed()
        .setColor(getRandomColor())
        .setTitle('Introduction')
        .setDescription(msg)
        .setTimestamp();
    msg.reply(embed)
}