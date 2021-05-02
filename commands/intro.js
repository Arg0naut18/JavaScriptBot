const Discord = require('discord.js');
const client = new Discord.Client();
const devid = '436844058217021441';
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
    const dev = client.users.fetch(devid);
    dev.then(function (devname) {
        let devtag = devname.tag;
        let mssg = `Thanks for you're concern. I am a bot developed by ${devtag.tag} to help our campmates here in ${camp_name}. Any trouble, DM me.`;
        const embed = new Discord.MessageEmbed()
            .setColor(getRandomColor())
            .setTitle('Introduction')
            .setDescription(mssg)
            .setTimestamp();
        msg.reply(embed)
    });
}