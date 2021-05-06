module.exports = {
    name: 'message',
    execute(message, client) {
        const { token, prefix, owner } = require("../config.json")
        const Discord = require('discord.js');
        /*
        if (debugMode == 1) {
            console.log(args);
            console.log(command);
            console.log(member);
            console.log(guild);
        }
        */
        if (message.author.bot) return;
        if (message.guild === null) {
            message.channel.send("Im sorry **BUT** this bot only works in servers! Have a good day!");
            return;
        }
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        const member = message.author;
        const guild = message.guild;

        if (message.content == "<@!" + client.user.id + ">") {
            client.commands.get("help").execute(client, Discord, message, guild);
        }

        //Checks if the message is from the bot or if it doesnt have a prefix
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        //Checks if there is a command with that name
        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(client, Discord, message, guild);
        } catch (error) {
            console.error(error);
            if (command == "channel"){
                message.reply("Oh no! Something went worng! Did you ping a channel and can I see the channel??")
            }else{
            message.reply(`there was an error trying to execute that command!`);
            }
        }
    },
};