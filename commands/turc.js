const Discord = require("discord.js")

module.exports = {

    name: 'turc',
    description: 'permet de faire afficher une video de type style',
    execute(client, message, args) {
        if(message.channel.name !== "nsfw") {
            message.channel.send("Va nsfw fdp");
            return;
        }
        console.log(args[0])
        if (args[0] === undefined || args[0] === null) {
            nombre = Math.floor(Math.random() * (211 - 1 + 1)) + 1;
            if (nombre >= 1 && nombre < 10) {
                message.channel.send("http://salepute.fr/" + "0" + nombre + ".mp4");
            } else {
                message.channel.send("http://salepute.fr/" + nombre + ".mp4");
            }
            return;
        }
        if (args[0] >= 1 && args[0] < 10) {
            message.channel.send("http://salepute.fr/" + "0" + args[0] + ".mp4");
        } else {
            message.channel.send("http://salepute.fr/" + args[0] +".mp4");
        }
    }
}