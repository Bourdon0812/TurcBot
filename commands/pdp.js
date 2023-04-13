const Discord = require("discord.js")

module.exports = {

    name: 'pdp',
    description: 'permet de visualiser la photo de profil d\'un utilisateur.',
    execute(client, message, args) {

        var user_mention = message.mentions.users.first()
        if (user_mention === undefined) {
            user_mention = message.author
        }
        let avatar = new Discord.MessageEmbed()

            .setColor('#57db66')
            .setTitle(`Voici la photo de profil de ${user_mention.tag}`)
            .setImage(`${user_mention.avatarURL()}`)
            .setFooter({text : `demandé par ${message.author.tag}`})


        message.channel.send({embeds : [avatar]});

    }

}