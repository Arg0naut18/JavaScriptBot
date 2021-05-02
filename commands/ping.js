module.exports = async function (msg) {
    msg.channel.send(`🏓Latency is ${msg.createdTimestamp - Date.now()}ms`);
}