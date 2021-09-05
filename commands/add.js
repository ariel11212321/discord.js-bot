module.exports = {
    name: 'add', 
    permissions: ['VIEW_CHANNEL'], 
    execute(client, message, args) {
        const target = message.mentions.users.first() || args[0]; 
        if(!message.channel.name.includes("ticket") || !message.member.roles.cache.has(client.config.staff_role_id)) return message.channel.send("you cant use this here!"); 
        if(target) {
            try {
                message.channel.updateOverwrite(target.id, { 
                    'VIEW_CHANNEL': true, 
                    'SEND_MESSAGES': true 
                }) 
                message.channel.send(`added <@${target.id}> to the ticket!`); 
            } 
            catch(error) {
                return message.reply("error!"); 
            }
        }
    }
} 