const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rename")
    .setDescription("Pour vous renomer sur le Discord."),

  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("rename")
      .setTitle("Votre nom sur le serveur");

    const firstnameInput = new TextInputBuilder()
      .setCustomId("firstnameInput")
      .setLabel("Entrez votre prénom")
      .setStyle(TextInputStyle.Short);

    const nameInput = new TextInputBuilder()
      .setCustomId("nameInput")
      .setLabel("Entrez votre nom")
      .setStyle(TextInputStyle.Short);

    const firstActionRowBuilder = new ActionRowBuilder().addComponents(
      firstnameInput
    );
    const secondActionRowBuilder = new ActionRowBuilder().addComponents(
      nameInput
    );

    modal.addComponents(firstActionRowBuilder, secondActionRowBuilder);

    await interaction.showModal(modal);
  },
};
