const {SlashCommandBuilder} = require("@discordjs/builders")
const{messageEmbed} = require("discord.js")
module.exports = {

    data: new SlashCommandBuilder()
    .setName( "pause")
    .setDescription('pauses the current song.')
    ,
    excute: async ({client,interaction}) => {
        const queue = client.player.getqueue(interaction.guild);
        if (!queue) {
            interaction.reply("theres nothing playing right now")
            return;
        }
        const currentsong = queue.current;

        queue.setPaused(true);

        await interaction.reply("paused current song || ")
           
            
        
    }

}
