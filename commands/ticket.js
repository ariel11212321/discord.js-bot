const Discord = require(`discord.js`); 
const enmap = require(`enmap`); 
const settings = new enmap({
    name: "settings", 
    autoFetch: true, 
    cloneLevel: "deep", 
    fetchAll: true 
})
module.exports = { 
    name: 'ticket',
    permissions: ["MANAGE_GUILD"],  
   async execute(client, message, args) {
        
        let sent = await message.channel.send(new Discord.MessageEmbed() 
            .setTitle("Ticket System")
            .setDescription("react to open a ticket!") 
     
        ); 
        sent.react('🎫'); 
        settings.set(`${message.guild.id}-ticket`, sent.id); 

        client.on('messageReactionAdd', async(reaction, user) => {
            if(user.bot) return; 
            if(user.partial) await user.fetch(); 
            if(reaction.partial) await reaction.fetch(); 
            if(reaction.message.partial) await reaction.message.fetch(); 
            
            let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`)
            if(!ticketid) return; 
            if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
                reaction.users.remove(user); 

                reaction.message.guild.channles.create(`ticket_${user.username}`, {
                    permissionOverwrites: [
                        {
                            id: user.id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"] 

                        }, 
                        {
                            id: reaction.message.guild.roles.everyone, 
                            deny: ["SEND_MESSAGES", "VIEW_CHANNEL"] 


                        },
                        {
                            id: client.config.staff_role_id,
                            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]  
                        }
                    ],
                    type: 'text'
                }).then(async channel => {
                    channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Welcome to your ticket!").setDescription("we will be with you shortly!"))
                })
            }
        })
    }
}