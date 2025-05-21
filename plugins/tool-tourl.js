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

import { uploader } from '../lib/uploader.js'

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('⚠️ *Tidak ditemukan media dalam pesan ini. Balas pesan yang berisi file atau media!*')
let media
try {
media = await q.download()
if (!media) return m.reply('⚠️ *Gagal mengunduh media!*')
} catch (err) {
return m.reply('⚠️ *Terjadi kesalahan saat mengunduh media. Coba lagi nanti!*')
}
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah media. Coba lagi nanti!*')
let response = `
🌟 *File berhasil diunggah!*
━━━━━━━━━━━━━━━━━━━
🔗 *Link: ${linkUpload}*
📏 *Ukuran: ${(media.length / 1024).toFixed(2)} KB*
📌 *File dapat diakses secara publik.*
━━━━━━━━━━━━━━━━━━━
`.trim()
m.reply(response)
}

handler.help = ['upload']
handler.tags = ['tools']
handler.command = /^(tourl|url)$/i
handler.register = true
handler.limit = true

export default handler