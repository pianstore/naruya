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
return m.reply(`🍓 *Gunakan: ${usedPrefix + command} on / off*\n\n*Contoh: ${usedPrefix + command} on*`)
}
if (args[0] === 'on') {
conn.cai = conn.cai || {}
conn.cai[m.chat] = {
active: true,
sessionid: '1',
character: 'hitori-gotoh'
}
m.reply('🍰 *Hitori aktif! Sekarang kamu bisa ngobrol dengannya~*')
} else if (args[0] === 'off') {
conn.cai = conn.cai || {}
delete conn.cai[m.chat]
m.reply('🧁 *Hitori dimatikan~ Dia gak akan membalas lagi.*')
} else {
m.reply(`🍬 *Pilihan hanya "on" atau "off"*\n*Contoh: ${usedPrefix + command} on*`)
}
}

handler.help = ['hitori']
handler.tags = ['ai']
handler.command = /^(hitori)$/i
handler.owner = true

export default handler