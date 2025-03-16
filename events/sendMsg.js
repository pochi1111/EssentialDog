const { Events,MessageFlags } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isModalSubmit() || interaction.customId != "sendmsg") return;
    const content = interaction.fields.getTextInputValue("content");
    await interaction.channel.send(content);
    await interaction.reply({
      content: "Message sent!",
      flags: MessageFlags.Ephemeral,
    });
    // await interaction.reply({ content: content });
  },
};