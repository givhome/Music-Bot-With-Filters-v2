const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Harmony? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Harmony','https://media.discordapp.net/attachments/810195648422477885/817474978835857429/image0.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Harmony to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=767885987740254291&permissions=49572160&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
