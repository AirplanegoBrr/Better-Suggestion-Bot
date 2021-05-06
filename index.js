const fs = require('fs')
const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Discord.Collection();

const { token, prefix, owner } = require("./config.json")


function reload() {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

    console.log("Loading Commands")
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);

        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        client.commands.set(command.name, command);
    }
    console.log("Loading Events")
    for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
    console.log("All loaded")
}

reload()


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("s!help", {
        type: "LISTENING",
        url: "https://www.twitch.tv/monstercat"
      });
});


client.on('messageReactionAdd', (reaction, user) => {
    console.log("first check");
    console.log(reaction.emoji.name)
    if (reaction.emoji.name === "🗄️") {
        console.log("second check");
    }
});


client.on('message', message => {
    if (message.author.bot) return;
    if (message.guild === null){
        message.channel.send("Im sorry **BUT** this bot only works in servers! Have a good day!");
        return;
    }
    console.log(message.content)
    console.log(client.user)
    if (message.content == "<@!"+client.user.id+">"){
        client.commands.get("help").execute(message);
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const user = message.mentions.users.first();
    const member = message.author;
    const guild = message.guild;
    const authorID = message.author.id;
    const memberPermissions = message.member.permissions.toArray();
    //if (authorID !== "250029754076495874") return;

    //console.log(args)
    //console.log(command)
    //console.log(user)
    //console.log(member)
    //console.log(guild)

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(client, Discord, message, args, user, member, guild, memberPermissions);
        //Very shit code <3
    } catch (error) {
        console.error(error);
        message.reply(`there was an error trying to execute that command!|| <@${owner}> ||`);
    }
});

client.login(token);