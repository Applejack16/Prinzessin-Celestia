const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content.startsWith(`CB{prefix}ping`)) {
        message.channel.send('Pong.');
    }
    else if (message.content.startsWith(`CB{prefix}beep`)) {
        message.channel.send('Boop.');
    }
    else if (message.content === `CB{prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
    }
    else if (message.content === `CB{prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    };
});

client.login(process.env.BOT_TOKEN);
