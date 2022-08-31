const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("admin")
    .setDescription("Pour candidater en tant qu'Admin Discord."),

  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("admin-modal")
      .setTitle("Candidature admin");

    const fullnameInput = new TextInputBuilder()
      .setCustomId("fullnameInput")
      .setLabel("Entrez votre prénom et nom")
      .setPlaceholder("Prénom + Nom")
      .setStyle(TextInputStyle.Short);

    const classInput = new TextInputBuilder()
      .setCustomId("classInput")
      .setLabel("Entrez votre classe")
      .setPlaceholder("On veut des B2 ou + :)")
      .setStyle(TextInputStyle.Short);

    const prezInput = new TextInputBuilder()
      .setCustomId("prezInput")
      .setLabel("Présentez vous")
      .setPlaceholder(
        "Parcours scolaire, expérience professionnelle, allez-vous jusqu'en I2, etc."
      )
      .setStyle(TextInputStyle.Paragraph);

    const motivInput = new TextInputBuilder()
      .setCustomId("motivInput")
      .setLabel("Montrez-nous votre motivation")
      .setPlaceholder(
        "Pourquoi voulez-vous rejoindre les admins du Discord de l'EPSI ?"
      )
      .setStyle(TextInputStyle.Paragraph);

    const ideasInput = new TextInputBuilder()
      .setCustomId("ideasInput")
      .setLabel("Soyez créatif !")
      .setPlaceholder(
        "Proposez-nous une/des idées pour améliorer le Discord de l'EPSI !"
      )
      .setStyle(TextInputStyle.Paragraph);

    const firstActionRowBuilder = new ActionRowBuilder().addComponents(
      fullnameInput
    );
    const secondActionRowBuilder = new ActionRowBuilder().addComponents(
      classInput
    );
    const thirdActionRowBuilder = new ActionRowBuilder().addComponents(
      prezInput
    );
    const fourthActionRowBuilder = new ActionRowBuilder().addComponents(
      motivInput
    );
    const fifthActionRowBuilder = new ActionRowBuilder().addComponents(
      ideasInput
    );

    modal.addComponents(
      firstActionRowBuilder,
      secondActionRowBuilder,
      thirdActionRowBuilder,
      fourthActionRowBuilder,
      fifthActionRowBuilder
    );

    await interaction.showModal(modal);
  },
};
