const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "role-menu",
  },
  async execute(interaction, client) {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === "role-menu") {
      await interaction.deleteReply();
    }

    let roles = []; // Array of roles

    switch (interaction.values[0]) {
      case "390870988218171394": // B1 Classe 1
      case "361833025350402048": // B1 Classe 2
        roles = [interaction.values[0], "500237991785005056"]; // Rôle classe + rôle B1
        break;

      case "473741870493859841": // B2 Classe 1
      case "473740568636162068": // B2 Classe 2
        roles = [interaction.values[0], "500238212246011904"]; // Rôle classe + rôle B2
        break;

      case "361838650507395072": // B3 Classe 1
      case "499935479014096926": // B3 Classe 2
      case "624676257853997086": // B3 Classe ASR
        roles = [interaction.values[0], "500238288695590922"]; // Rôle classe + rôle B3
        break;

      case "494865530876854272": // I1 Classe 1
      case "624256058713440271": // I1 Classe 2
      case "624256122190299156": // I1 Classe ASR
        roles = [interaction.values[0], "624277522309316647"]; // Rôle classe + rôle I1
        break;

      case "496708288184975361": // I2 Classe 1
      case "750058358056157416": // I2 Classe 2
      case "872461753215221760": // I2 Classe 3
        roles = [interaction.values[0], "750058301915660288"]; // Rôle classe + rôle I2
        break;

      case "645967993255362560": // WIS 1
        roles = [interaction.values[0]];
        break;
      case "754032740571283536": // WIS 2
        roles = [interaction.values[0]];
        break;
      case "753316912712122519": // WIS 3
        roles = [interaction.values[0]];
        break;
      case "760191990754181160": // Dynaschool
        roles = [interaction.values[0]];
        break;
      case "473777193827303424": // Ancien
        roles = [interaction.values[0]];
        break;
    }

    await interaction.member.roles.add(roles); // Ajoute les rôles
    await interaction.reply({
      content: "Vos rôles ont été ajoutés !",
      ephemeral: true,
    });

    const roleEmbed = new EmbedBuilder()
      .setColor(0x3498db)
      .addFields({
        name: "Commande /role",
        value:
          "**" +
          "<@"+interaction.user.id +">" +
          "** s'est vu attribuer le rôle **" +
          "<@&"+roles[0]+">"+
          "**",
      })
      .setTimestamp()
      .setFooter({ text: "Log system of EPSI" });
    client.channels.cache
      .get("1004078396789243914")
      .send({ embeds: [roleEmbed] });
  },
};
