

module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    execute(client, message, args) {
        const target = message.mentions.users.first() || args[0];
        const reason = args.join(" ").slice(0)
        if (target) {
            try {
                message.guild.members.cache.get(target).ban(reason).then(() => {
                    message.channel.send(`successfully banned <@${target.id}> from the guild.`);
                    target.send(`you were banned from  ${message.guild.name}  because: ${reason}`)
                })

            } catch (error) {
                return message.reply("error!");
            }
        }



    }
}