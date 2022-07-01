const http = require('http')
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const client = require('../index')
module.exports = {
    active: true,
    execute: async function(message, args) {
        const permission = message.member.permissions.has("ADMINISTRATOR")
        // 
        

        // To change text / style of button, reference right below. (Button styles: https://discordjs.guide/interactions/buttons.html#button-styles)
        const createButton = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('ziggyTicketCreate')
                    .setLabel('Create A Ticket')
                    .setStyle('SUCCESS'),
            );
        
        const createEmbed = new MessageEmbed()
                .setTitle(":tickets: Create A Ticket")
                .setDescription("Interact to create a support ticket")
                .setColor("GREEN")

        if(message.member === client.user) {
            return
        }

        if(!permission) {
            
            return message.reply("You do not have permission for that command").then(reply => setTimeout(function() {
                message.delete() + reply.delete()
            }, 5000))
        }

        return message.channel.send({ embeds: [createEmbed], components: [createButton] }).then(message.delete())


    }
}