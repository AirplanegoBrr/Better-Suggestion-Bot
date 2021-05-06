const fs = require("fs")

module.exports = {
    name: 'ad',
    description: 'ad command.',
    execute(client, Discord, message, guild) {
        const memberPermissions = message.member.permissions.toArray();
        var rawdata = fs.readFileSync('./data.json');
        //Use
        var data = JSON.parse(rawdata);
        console.log(data);

        //Will add old data so we can edit it
        var saveJson = data;

        if (saveJson.servers[guild.id]) {
        } else {
            saveJson.servers[guild.id] = {}
        }

        if (memberPermissions.includes("MANAGE_CHANNELS") || message.author.id == 250029754076495874) {
            if (saveJson.servers[guild.id].ad == true) {
                saveJson.servers[guild.id].ad = false;
            } else {
                saveJson.servers[guild.id].ad = true;
            }
            console.log(saveJson.servers[guild.id].ad);

            var save = JSON.stringify(saveJson);
            fs.writeFileSync('./data.json', save);
        };
    }
};