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

let handler = async (m, { conn, usedPrefix, command, args }) => {
let chat = global.db.data.chats[m.chat]
if (!args[0]) {
return m.reply(`🍩 *Gunakan: ${usedPrefix + command} on / off*\n\n*Contoh:* ${usedPrefix + command} on`)
}
conn.cai = conn.cai || {}
if (args[0] === 'on') {
conn.cai[m.chat] = {
active: true,
sessionid: '1',
character: 'gemini-advanced'
}
m.reply('🍡 *Gemini Advanced AKTIF! Sekarang bisa ngobrol + kirim gambar juga~*')
} else if (args[0] === 'off') {
delete conn.cai[m.chat]
m.reply('🍮 *Gemini Advanced DIMATIKAN! Dia istirahat dulu ya~*')
} else {
m.reply(`🧁 *Pilihannya cuma "on" atau "off"*\n\n*Contoh:* ${usedPrefix + command} on`)
}
}

handler.help = ['geminiadv']
handler.tags = ['ai']
handler.command = /^(geminiadv)$/i
handler.owner = true

export default handler