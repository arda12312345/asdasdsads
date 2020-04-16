const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("Mcsda İNVİTEMANAGER Bot", client.user.avatarURL)
.setColor("BLUE")
.setTitle("Mcsda İNVİTEMANAGER Bot")
 .setDescription(`

**!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!davetlerim\`
örnek komut 2 kullanımı: \`!davet-ekle\`
`)
 .addField("komutlar (13)", `
herkesin kullanabileceği standart komutlar;
\`davetlerim\`,\`invites\`,\`davet-kanal\`,\`davet-kanal-sıfırla\`,\`komutlar\`,\`rank-ekle\`,\`rank-liste\`,\`rank-sil\`,\`davet-ekle\`,\`davet-sıfırla\`,\`yakında\`,\`yakında\`
`)
 .setFooter("MERVEAKALS TARAFINDAN KODLANMIŞTIR EDİTLENMİŞTİR", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
