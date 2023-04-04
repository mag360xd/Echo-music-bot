const {SlashCommandBuilder} = require("@discordjs/builders")
const{messageEmbed} = require("discord.js")
const {queryType} = require ("discord-player")


module.exports = {
    data: new SlashCommandBuilder()
    .setName( "queue")
    .setDescription('Show the first 10 songs in the queue')
   ,
   execute: async ({interaction, client}) => {
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

    if (!queue || !(queue.node.isPlaying())) {
        await interaction.reply("theres nothing playing/in queue")
        return;
    }
    const queueString = queue.tracks.slice(0,10).map((song,i) => {
        return `${song.title} - ${i + 1} [${song.duration}] ${song.requestedBy.id}`
    }).join("\n")

       await interaction.reply({ 
        embeds: [
            new messageEmbed().
            setDescription(`currently playing  [${currentsong.title} ] -@${currentsong.requestedBy.id} \n\n QUEUE \n ${queueString}`)
           .setThumbnail(currentSong.thumbnail)
        ]  
})
   }
}