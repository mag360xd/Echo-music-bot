const {SlashCommandBuilder} = require("@discordjs/builders")
const{messageEmbed} = require("discord.js")
module.exports = {

    data: new SlashCommandBuilder()
    .setName( "skip")
    .setDescription('skips the current song.')
    ,
    excute: async ({client,interaction}) => {
        const queue = client.player.getqueue(interaction.guild);
        if (!queue) {
            interaction.reply("theres nothing playing right now")
            return;
        }
        const currentsong = queue.current;

        queue.skip();

        await interaction.reply( {
            embeds: [
                new messageEmbed().
                setDescription(`skipped ####${currentsong.title}###`)
                .setThumbnail(currentsong.thumbnail)
            ]
        })
    }

}
