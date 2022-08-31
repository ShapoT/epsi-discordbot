const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("edt")
    .setDescription("Affiche votre emploi du temps de la journée"),
};
