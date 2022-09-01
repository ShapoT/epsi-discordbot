const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  SelectMenuOptionBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription(
      "Vous permet de  choisir un rôle en fonction de votre promo."
    ),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId("role-menu")
      .setPlaceholder("Choisissez votre rôle")
      .setMinValue(1)
      .setMaxValue(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: "B1 Classe 1",
          value: "390870988218171394",
        }),
        new SelectMenuOptionBuilder({
          label: "B1 Classe 2",
          value: "361833025350402048",
        }),
        new SelectMenuOptionBuilder({
          label: "B2 Classe 1",
          value: "473741870493859841",
        }),
        new SelectMenuOptionBuilder({
          label: "B2 Classe 2",
          value: "473740568636162068",
        }),
        new SelectMenuOptionBuilder({
          label: "B3 Classe 1",
          value: "361838650507395072",
        }),
        new SelectMenuOptionBuilder({
          label: "B3 Classe 2",
          value: "499935479014096926",
        }),
        new SelectMenuOptionBuilder({
          label: "B3 Classe ASR",
          value: "624676257853997086",
        }),
        new SelectMenuOptionBuilder({
          label: "I1 Classe 1",
          value: "494865530876854272",
        }),
        new SelectMenuOptionBuilder({
          label: "I1 Classe 2",
          value: "624256058713440271",
        }),
        new SelectMenuOptionBuilder({
          label: "I1 Classe ASR",
          value: "624256122190299156",
        }),
        new SelectMenuOptionBuilder({
          label: "I2 Classe 1",
          value: "496708288184975361",
        }),
        new SelectMenuOptionBuilder({
          label: "I2 Classe 2",
          value: "750058358056157416",
        }),
        new SelectMenuOptionBuilder({
          label: "I2 Classe 3",
          value: "872461753215221760",
        }),
        new SelectMenuOptionBuilder({
          label: "WIS 1",
          value: "645967993255362560",
        }),
        new SelectMenuOptionBuilder({
          label: "WIS 2",
          value: "754032740571283536",
        }),
        new SelectMenuOptionBuilder({
          label: "WIS 3",
          value: "753316912712122519",
        }),
        new SelectMenuOptionBuilder({
          label: "Dynaschool",
          value: "760191990754181160",
        }),
        new SelectMenuOptionBuilder({
          label: "Ancien EPSI",
          value: "473777193827303424",
        })
      );
    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
    await interaction.deleteReply();
  },
};
