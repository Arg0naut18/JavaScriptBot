const fetch = require('node-fetch')
module.exports = async function (msg, args) {
    console.log(args)
    const keyword = args
    let url = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&limit=8`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json)
    const index = Math.floor(Math.random() * json.reults.length);
    msg.channel.send(json.results[index].url)
}