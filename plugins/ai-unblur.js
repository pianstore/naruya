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

import { processing } from '../lib/scrape.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('🍩 *Fotonya mana?*\nReply gambar atau kirim ulang yang ingin di-unblur ya~')
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`🍪 *Tipe gambar tidak didukung!*\n📌 Format: jpg, jpeg, png\n🔎 Terdeteksi: ${mime}`)
await global.loading(m, conn)
let img = await q.download()
let image = await processing(img, 'enhance')
await conn.sendFile(m.chat, image, '', '🧁 *Gambar berhasil diproses!*\nCemilan mata siap disajikan~', m)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['unblur']
handler.tags = ['ai']
handler.command = /^(unblur)$/i
handler.limit = true
handler.register = true

export default handler