const Discord = require(`discord.js`); 
const fs = require(`fs`); 
require("dotenv").config();
const config = require(`./config.json`) 
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"]});
client.config = config; 

client.commands = new Discord.Collection(); 
client.eventes = new Discord.Collection(); 

["command_handler", "event_handler"].forEach((handler) => {
        require(`./handlers/${handler}`)(client, Discord); 
});




client.on('ready', () => {

    console.log("logged in as: " + client.user.tag); 
}) 

client.login(config.token); 

 

