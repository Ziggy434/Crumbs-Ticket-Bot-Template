// Variables (best not to touch this. and yes ik im messy)
const { Console } = require('console');
const Discord = require('discord.js');
const { Client } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const { MessageActionRow, MessageButton } = require('discord.js');
const config1 = require("./config");
const config = config1.config;
const discTranscripts = require('discord-html-transcripts');
//[[////////////////////////////////////////////////////////////////////////////////]]


// intents (No need to touch these unless u want to ig)
const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS'],
    partials: ['MESSAGE', 'USER'],
});
//[[////////////////////////////////////////////////////////////////////////////////]]


// What to execute when the bot starts
client.on('ready', () => {
    console.log('Ready');

    // print the command list (to remove this feture simply remove down to next comment break)
    console.log('Loaded commands: ')
    fs.readdir(config.cmdPath, (err, files) => {
        files.forEach(file => {
            console.log(file.toLowerCase().slice(0, -3))
        })
    })
    //[[////////////////////////////////////////////////////////////////////////////////]]

    // Bot status !!(EDITABLE VIA CONFIG.JS)!!
    client.user.setPresence({ activities: [{ name: config.status, type: config.statusType}]})
    //[[////////////////////////////////////////////////////////////////////////////////]]
})

//[[////////////////////////////////////////////////////////////////////////////////]]



// Command handeler (best not to touch this)

// For information regarding adding your own commands, reference the documentation

client.on("messageCreate", (message) => {
    const args = message.content.trim().split(/ +/g);

    if(message.content.startsWith(config.prefix)) {
        fs.readdir(config.cmdPath, (err, files) => {
            files.forEach(file => {
                if(args[0] === config.prefix + file.toLowerCase().slice(0, -3)) {
                    const command = require(config.cmdPath + file)

                    if(!command.active){
                        return message.reply('that command is currently disabled')
                    }

                    command.execute(message, args)
                }
            })
        })
    }
})
//[[////////////////////////////////////////////////////////////////////////////////]]

// Interaction Handelers

client.on('interactionCreate', async interaction => {


    // Ticket Create Interaction handler
    if(interaction.customId === "ziggyTicketCreate") {
        const logChannel = interaction.guild.channels.cache.get(config.ticketLogChannel);

        ticketChannel = await interaction.guild.channels.create("ticket - " + interaction.member, {
            type: "GUILD_TEXT",
            reason: "Muted channel created",
        })
        await ticketChannel.setParent(config.ticketCatagory);
        await ticketChannel.permissionOverwrites.create(interaction.member, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        })

        // embeds
        const closeButton = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('ziggyTicketClose')
                .setLabel('Close Ticket')
                .setStyle('DANGER'),
        );
    
        const closeEmbed = new MessageEmbed()
            .setTitle(":tickets: Ticket " + interaction.member)
            .setDescription("Interact to close the support ticket")
            .setColor("GREEN")

        const logEmbed = new MessageEmbed()
        .setTitle(":tickets: Ticket Opened (ticket - " + interaction.member + ")")
        .setDescription("Ticket closed by <@" + interaction.member + ">")
        .setColor("GREEN")
        //


        await ticketChannel.send({embeds: [closeEmbed], components: [closeButton]}) + logChannel.send({embeds: [logEmbed]}) + interaction.reply({ content: "Ticket Created!", ephemeral: true})
    }
    //


    // Ticket close interaction handeler
    if(interaction.customId === "ziggyTicketClose") {
        const logChannel = interaction.guild.channels.cache.get(config.ticketLogChannel);
        const attachment = await discTranscripts.createTranscript(interaction.channel);

        // embeds
        const logEmbed = new MessageEmbed()
            .setTitle(":tickets: Ticket Closed (ticket - " + interaction.member + ")")
            .setDescription("Ticket closed by <@" + interaction.member + ">")
            .setColor("DARK_ORANGE")
        //


        await interaction.reply('Ticket will close in 5 seconds per request of <@' + interaction.member + '>...').then(setTimeout(function() {
            
            logChannel.send({embeds: [logEmbed], files: [attachment]}) + interaction.channel.delete()
            
        }, 5000))
    }
})
//[[////////////////////////////////////////////////////////////////////////////////]]

client.login(config.token)

module.exports = { client }