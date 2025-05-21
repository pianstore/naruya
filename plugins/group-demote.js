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

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
if (!text && !m.mentionedJid.length) return m.reply(`🍰 *Masukkan nomor atau tag pengguna yang ingin diturunkan dari admin, contoh: ${usedPrefix + command} @user atau 6281234567890*`)
let users = m.mentionedJid.length ? m.mentionedJid : text.split(/\s+/).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 14)
if (!users.length) return m.reply('🍩 *Nomor tidak valid atau tidak ditemukan.*')
try {
await conn.groupParticipantsUpdate(m.chat, users, 'demote')
m.reply('🧁 *Berhasil diturunkan dari admin ya sayang~*')
} catch (e) {
m.reply('🍬 *Terjadi kesalahan, pastikan nomor valid dan bot adalah admin.*')
}
}

handler.help = ['demote']
handler.tags = ['group']
handler.command = /^(demote)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler