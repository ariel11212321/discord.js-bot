

module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args) {
        const target = message.mentions.users.first() || args[0];
        const reason = args.join(" ").slice(0)
        if(target) { 
        try {
            message.guild.members.cache.get(target).kick()
            message.channel.send(`successfully kicked <@${target.id}> from the guild.`);
            target.send(`you were kicked from  ${message.guild.name}  because: ${reason}`)
        } catch (error) {
            return message.reply("error!");
        }
    }



    }
}