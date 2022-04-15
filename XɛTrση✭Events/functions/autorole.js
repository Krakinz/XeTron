"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const roleData = require("../../XɛTrση✭Database/autorole");
module.exports = async (member) => {
  const data = await roleData
    .findOne({
      Ӽɛȶʀօռֆɨɖ: member.guild.id,
    })
    .catch((err) => console.log(err));

  if (data) {
    let role = data.Role;
    let arole = member.guild.roles.cache.get(role);
    if (role) {
      member.roles.add(arole);
    } else if (!role) {
      return;
    }
  } else if (!data) {
    return;
  }
};
