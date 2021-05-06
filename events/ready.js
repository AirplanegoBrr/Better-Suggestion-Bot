module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setActivity("s!help", {
            type: "LISTENING",
            url: "https://www.twitch.tv/monstercat"
        });
    },
};