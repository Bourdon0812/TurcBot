const { Client, Collection, Intents} = require("discord.js");
const { TOKEN, PREFIX} = require("./config")
const fs = require("fs");
//const database = require("quick.db")
//const db = new database.table('infos')

const client = new Client({intents : [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(commandFiles);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("█████████████████████████████████████████████████████████████████");
    console.log("███████████████████████████TurcBOT ON████████████████████████████");
    console.log("█████████████████████████████████████████████████████████████████");
});

client.on("messageCreate", message => {

    if(message.author.bot || !message.content.startsWith(PREFIX))
        return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if(!client.commands.has(command))
        return;

    client.commands.get(command).execute(client, message, args);

});

client.login(TOKEN);

