module.exports = {
	name: 'messageReactionAdd',
	execute(reaction, user) {
        console.log("first check");
        console.log(reaction.emoji.name)
        if (reaction.emoji.name === "🗄️") {
            console.log("second check");
        }
	},
};