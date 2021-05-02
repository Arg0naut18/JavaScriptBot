const Discord = require('discord.js');
const client = new Discord.Client();
client.token = process.env.BOTTOKEN;
const devid = process.env.ownerid;
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
    const dev = await client.users.fetch(devid);
    let mssg = `Thanks for you're concern.\nI am a bot developed by **${dev.tag}** to help our campmates here in **${camp_name}**. Any trouble, DM me.`;
    const embed = new Discord.MessageEmbed()
        .setColor(getRandomColor())
        .setTitle('Introduction')
        .setDescription(mssg)
        .setTimestamp();
    msg.reply(embed)
}