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
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`🌸 *Balas gambar dengan perintah*\n\n*${usedPrefix + command}*`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`🌼 *Mime ${mime} tidak didukung!*`)
await global.loading(m, conn)
let media = await q.download()
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('🌺 *Gagal mengunggah gambar. Coba lagi nanti!*')
let apiUrl = global.API('https://some-random-api.com', '/canvas/overlay/triggered', { avatar: linkUpload })
let stiker = await sticker(false, apiUrl, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stiker, false, false, m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['triggered']
handler.tags = ['sticker']
handler.command = /^(triggered)$/i
handler.register = true
handler.limit = true

export default handler