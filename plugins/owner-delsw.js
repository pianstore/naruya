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

import baileys from "baileys"

let handler = async (m, { conn }) => {
if (!Array.isArray(global.storyIds) || global.storyIds.length === 0)
return m.reply('🚫 *Tidak ada status yang bisa dihapus.*')
for (let id of global.storyIds) {
try {
await conn.sendMessage(baileys.STORIES_JID, {
delete: {
remoteJid: baileys.STORIES_JID,
fromMe: true,
id
}
})
await delay(1000)
} catch (e) {
console.error(`Gagal hapus story ID: ${id}`, e)
}
}
global.storyIds = []
m.reply('*Semua status berhasil dihapus.*')
}

handler.help = ['delsw']
handler.tags = ['owner']
handler.command = /^(delsw)$/i
handler.owner = true

export default handler

function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}