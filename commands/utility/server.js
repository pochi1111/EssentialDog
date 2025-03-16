const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageFlags } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('サーバーの情報を表示します。'),
  async execute(interaction) {
    if (!interaction.guild) {
      return await interaction.reply({ content: 'このコマンドはサーバー内でのみ使用できます。', flags: MessageFlags.Ephemeral });
    }
    await interaction.reply(`${interaction.guild.name}\nサーバーID: ${interaction.guild.id}\nサーバー人数: ${interaction.guild.memberCount}`);
  },
};
