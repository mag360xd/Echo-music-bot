const {SlashCommandBuilder} = require("@discordjs/builders")
const{messageEmbed} = require("discord.js")
module.exports = {

    data: new SlashCommandBuilder()
    .setName( "resume")
    .setDescription('resumes the current song.')
    ,
    excute: async ({client,interaction}) => {
        const queue = client.player.nodes.create(guild);
        if (!queue) {
            interaction.reply("theres nothing playing right now")
            return;
        }
        const currentsong = queue.current;

        queue.setPaused(false);

        await interaction.reply("resumed current song || ")
           
            
        
    }

}
