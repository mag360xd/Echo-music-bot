const {SlashCommandBuilder} = require("@discordjs/builders")
const{messageEmbed} = require("discord.js")
module.exports = {

    data: new SlashCommandBuilder()
    .setName( "exit")
    .setDescription('exits the current song.')
    ,
    excute: async ({client,interaction}) => {
        const queue = player.nodes.create({
            metadata: {
                    channel: interaction.channel,
                    client: interaction.guild.members.me,
                 requestedBy: interaction.user,
                   
                   },
                   selfDeaf: true,
                     volume: 80,
                      leaveOnEmpty: true,
                      leaveOnEmptyCooldown: 300000,
                      leaveOnEnd: true,
                      leaveOnEndCooldown: 300000,
    })
        if (!queue) {
            interaction.reply("theres nothing playing right now")
            return;
        }
        const currentsong = queue.currentTrack;

        queue.delete();

        await interaction.reply("all songs have been removed")
           
            
        
    }

}
