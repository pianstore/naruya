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

let handler = async (m, { text, usedPrefix, command }) => {
let store = global.db.data.chats[m.chat].store
if (Object.keys(store).length === 0) return m.reply('🚫 *Store ini masih kosong!*')
if (!text) return m.reply(`📝 *Masukkan nama item yang ingin dihapus!*\n\n📌 *Contoh:*\n*${usedPrefix + command} panel*`)
if (!store[text]) return m.reply('❌ *Item tidak ditemukan dalam store!*')
delete store[text]
m.reply(`🗑️ *Item \`${text}\` berhasil dihapus dari store!*`)
}

handler.help = ['dellist']
handler.tags = ['store']
handler.command = /^(del(ete)?(store|list))$/i
handler.owner = true
handler.group = true

export default handler