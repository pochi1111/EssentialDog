const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('オンラインである場合、Pong!と返します。'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};