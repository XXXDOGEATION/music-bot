const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "Invite le bot dans ton serveur",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Invite moi ou tu meurt !")
  .setColor("RED")
  .setDescription(`[Invite](${inviteURL}) ou tu **MEURT**`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}
