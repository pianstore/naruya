/*
██╗███████╗██╗░░░██╗███╗░░░███╗██╗
██║╚════██║██║░░░██║████╗░████║██║
██║░░███╔═╝██║░░░██║██╔████╔██║██║
██║██╔══╝░░██║░░░██║██║╚██╔╝██║██║
██║███████╗╚██████╔╝██║░╚═╝░██║██║
╚═╝╚══════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝
Note: Terimakasih Telah Membeli Script Ini Semoga Bermanfaat
Copyright © 2024 - 2025 Crystalia
꒰⚘꒱ Admin Contact ꒱⟡
𓅯 𝙉͢𝙖𝙧𝙪𝙮𝙖 𝙄͢𝙯𝙪𝙢𝙞
https://linkbio.co/naruyaizumi
𓅯 𝙑͢𝙡𝙞𝙣𝙚
WhatsApp: wa.me/6285770019354
𓅯 𝑺͢𝑿𝒁𝒏𝒊𝒈𝒉𝒕𝒎𝒂𝒓𝒆
WhatsApp: wa.me/6281398961382
*/

import fs from "fs";

let handler = async (m, { conn }) => {
let plugins = Object.values(global.plugins);
let totalHelp = plugins.reduce((sum, plugin) => sum + (plugin.help ? plugin.help.length : 0), 0);
let totalTags = [...new Set(plugins.flatMap((v) => v.tags || []))].length;
let totalPlugins = plugins.length;
conn.adReply(
m.chat,
`✨ *Statistik Plugin Saya:*\n\n` +
`📚 *Total Fitur: ${totalHelp}*\n` +
`🏷️ *Total Menu: ${totalTags}*\n` +
`📂 *Total Plugin: ${totalPlugins}*`,
'𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙎𝙄 𝙁𝙄𝙏𝙐𝙍',
'',
fs.readFileSync('./media/thumbnail.jpg'),
global.config.website,
m
);
};

handler.help = ['totalfitur'];
handler.tags = ['info'];
handler.command = ['totalfitur'];
handler.owner = true;

export default handler;