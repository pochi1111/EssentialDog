const { SlashCommandBuilder,ModalBuilder,TextInputBuilder, ActionRowBuilder, } = require("@discordjs/builders");
const { TextInputStyle, MessageFlags } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sendmsg")
    .setDescription("匿名でメッセージを送信します。"),
  async execute(interaction) {
    if (!interaction.guild) {
        await interaction.reply({ content: 'このコマンドはサーバー内でのみ使用できます。', flags: MessageFlags.Ephemeral });
        return;
    }
    const modal = new ModalBuilder()
        .setCustomId('sendmsg')
        .setTitle('メッセージ送信');
    const contentInput = new TextInputBuilder()
        .setCustomId('content')
        .setPlaceholder('メッセージを入力してください')
        .setRequired(true)
        .setLabel('メッセージ')
        .setStyle(TextInputStyle.Paragraph);
    const firstActionRow = new ActionRowBuilder().addComponents(contentInput);
    modal.addComponents(firstActionRow);
    await interaction.showModal(modal);
  },
};
