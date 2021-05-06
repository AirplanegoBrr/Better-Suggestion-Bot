module.exports = {
    name: 'ping',
    description: 'ping command.',
    execute(client, Discord, message, args, user, member, guild, memberPermissions) {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}