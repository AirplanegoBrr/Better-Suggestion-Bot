module.exports = {
    name: 'help',
    description: 'help command.',
    execute(client, Discord, message, guild) {
        const Embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Help command")
            .setURL("https://cdn.discordapp.com/avatars/250029754076495874/bdf3953b71edb421776e43d24e7651fe.webp")
            .setAuthor(message.author.username, message.author.avatarURL(), message.author.avatarURL())
            .setDescription('My **prefix** is ``s!``\nThis bot is VERY easy to use!')
            //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                //{ name: 'Regular field title', value: 'Some value here' },
                //{ name: '\u200B', value: '\u200B' },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                { name: "help" , value: "Shows this message!", inline: true },
                { name: "suggest", value: "Suggest an suggestion", inline: true },
                { name: "ping", value: "Get the bot ping (Its a little broken)" },
                { name: "Admin commands:", inline: true },
                { name: "channel", value: "Set the suggestion channel", inline: true }

            )
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Bot by !!AirplaneGoBrr!!#1613', 'https://cdn.discordapp.com/avatars/250029754076495874/bdf3953b71edb421776e43d24e7651fe.webp');
        message.channel.send(Embed)
        //message.channel.send("My **prefix** is ``s!``\nThis bot is VERY easy to use!\n\nDo ``s!suggest`` to suggest an idea!\n\nAlso ``s!ping`` is a command and its a *little* broken \n\n*and for the admins*\nDo ``s!channel`` to set the suggestion channel!\n\nand if you wanna use this bot use this link: ||<https://discord.com/oauth2/authorize?client_id=839235993789661215&permissions=68688&scope=bot> there will be a way SOON to disable this AD||");
    }
}