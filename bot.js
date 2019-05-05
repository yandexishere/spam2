const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("574603678808277015")
setInterval(function() {
channel.send(`tickettticketticket`);
}, 30)
})

client.login(process.env.BOT_TOKEN);