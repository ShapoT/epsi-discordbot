const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "admin-modal",
    description: "Pour candidater en tant qu'Admin Discord.",
  },

  async execute(interaction, client) {
    await interaction.reply({
      content: "Votre candidature a été soumise !",
      ephemeral: true,
    });
    const adminEmbed = new EmbedBuilder()
      .setColor(0x2ec71)
      .addFields({
        name: "Candidature admin Discord",
        value: "**" + "<@"+interaction.user.id +">"+ "** a soumis sa candidature :",
      })
      .addFields({
        name: "Prénom et nom",
        value: interaction.fields.getTextInputValue("fullnameInput"),
      })
      .addFields({
        name: "Classe",
        value: interaction.fields.getTextInputValue("classInput"),
      })
      .addFields({
        name: "Présentation",
        value: interaction.fields.getTextInputValue("prezInput"),
      })
      .addFields({
        name: "Motivation",
        value: interaction.fields.getTextInputValue("motivInput"),
      })
      .addFields({
        name: "Idées",
        value: interaction.fields.getTextInputValue("ideasInput"),
      })
      .setTimestamp()
      .setFooter({ text: "Log system of EPSI" });
    client.channels.cache
      .get("1004088197178986506")
      .send({ embeds: [adminEmbed] })
  },
};
