const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "rename",
    description: "Vous permet de vous identifier correctement sur le serveur.",
  },

  async execute(interaction, client) {
    const firstnameInput =
      interaction.fields
        .getTextInputValue("firstnameInput")
        .charAt(0)
        .toUpperCase() +
      interaction.fields
        .getTextInputValue("firstnameInput")
        .slice(1)
        .toLowerCase();
    const nameInput = interaction.fields
      .getTextInputValue("nameInput")
      .toUpperCase();
    const member = interaction.guild.members.cache.get(interaction.user.id);
    member.setNickname(
      firstnameInput + " " + nameInput + " | " + member.user.tag.slice(0, -5)
    );
    await interaction.reply({
      content:
        "Votre nom a bien été changé par " +
        firstnameInput +
        " " +
        nameInput +
        " | " +
        member.user.tag.slice(0, -5) +
        " ! ",
      ephemeral: true,
    });
    const renameEmbed = new EmbedBuilder()
      .setColor(0x3498db)
      .addFields({
        name: "Commande /rename",
        value:
          "**" +
          member.user.tag +
          "** a changé son nom en **" +
          firstnameInput +
          " " +
          nameInput +
          " | " +
          member.user.tag.slice(0, -5) +
          "**",
      })
      .setTimestamp()
      .setFooter({ text: "Log system of EPSI" });
    client.channels.cache
      .get("1004068113085640704")
      .send({ embeds: [renameEmbed] });
  },
};
