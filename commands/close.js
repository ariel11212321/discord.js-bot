module.exports = {
    name: 'close', 
    permissions: 'VIEW_CHANNEL', 
    execute(client, message, args) {
        if(message.channel.name.includes("ticket-")) {
            message.channel.send("closing channel in 10 seconds..."); 
            setInterval(() => {
                message.channel.delete();    
            }, 10000)
        } else {
            return; 
        }
         
    }
}