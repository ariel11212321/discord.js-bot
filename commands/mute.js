

module.exports = {
    name: 'mute', 
    permissions: ["MANAGE_ROLES"], 
    execute(client, message, args) {
        const target = message.mentions.users.first() || args[0]; 
        const reason = args.join(" ").slice(0)  
        try {
            message.guild.members.cache.get(target).roles.add(client.config.mute_role_id)
                message.channel.send(`successfully muted <@${target.id}> from the guild.`); 
                target.send(`you were muted from  ${message.guild.name}  because: ${reason}`)
            } catch(error) {
           return message.reply("error!"); 
        } 

       


    } 
}