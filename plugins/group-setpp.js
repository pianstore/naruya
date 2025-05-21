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

import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted || !/image/.test(m.quoted.mimetype)) return m.reply(`*Kirim atau balas gambar dengan perintah:*\n${usedPrefix + command}`)

try {
let media = await m.quoted.download()
await conn.updateProfilePicture(m.chat, media)
m.reply('*Foto grup berhasil diperbarui!*')
} catch (e) {
m.reply('⚠️ *Gagal mengganti foto grup. Pastikan aku adalah admin dan gambar tidak melebihi batas ukuran.*')
}
}

handler.help = ['setppgc']
handler.tags = ['group']
handler.command = /^(setppgc)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler