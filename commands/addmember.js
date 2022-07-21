const http = require('http')
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const client = require('../index');
const { channel } = require('diagnostics_channel');
module.exports = {
    active: true,
    execute: async function(message, args) {
        const permission = message.member.permissions.has("ADMINISTRATOR")
        const userToAdd = message.mentions.users.first()

        if(message.mentions.users.first()) {
            return message.reply("Please mention a user to add to the ticket");
        }

        if(message.member === client.user) {
            return
        }

        if(!permission) {
            
            return message.reply("You do not have permission for that command").then(reply => setTimeout(function() {
                message.delete() + reply.delete()
            }, 5000))
        }

        return await message.channel.permissionOverwrites.create(userToAdd, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        }) + message.channel.send(`${userToAdd} Was added to the ticket by ${message.member}.`).then(message.delete())



    }
}