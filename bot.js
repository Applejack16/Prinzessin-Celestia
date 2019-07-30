const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    }
    else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
    }
    else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    };
});

client.login(process.env.BOT_TOKEN);
