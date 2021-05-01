const prefix = '!'
const gif = require('./commands/gif.js')
const ping = require('./commands/ping.js')
const commands = {
    gif,
    ping
}
module.exports = async function (msg, args) {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    args = msg.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    console.log(command, args)
    if (command === 'ping') {
        commands[command](msg, args)
    }
    if (command === "gif") {
        commands[command](msg)
    }
}