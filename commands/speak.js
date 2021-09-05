const Discord = require(`discord.js`); 
module.exports = {
    name: 'speak', 
    permissions: ["MANAGE_GUILD"],
    execute(client, message, args) {
        const channel = args[0]; 
        if(!channel || channel == null) channel = message.channel; 
        channel.send(new Discord.MessageEmbed().setDescription(args.join(" ").slice(0)))
    }
}