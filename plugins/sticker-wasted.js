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
await global.loading(m, conn)
let q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/image\/(jpe?g|png)/i.test(mime)) return m.reply(`🌸 *Balas gambar dengan perintah ${usedPrefix + command}*`)
let media = await q.download()
let link = await uploader(media)
let apiUrl = global.API('lol', '/api/editor/wasted', { img: link }, 'apikey')
let res = await fetch(apiUrl)
if (!res.ok) return m.reply('🍡 *Yahh... gagal memproses gambar. Coba lagi nanti yaa!*')
let buffer = Buffer.from(await res.arrayBuffer())
let stik = await sticker(buffer, false, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stik, 'sticker.webp', m)
} catch (e) {
console.error(e)
m.reply('🍰 *Ada kesalahan teknis!*\n🌸 *Coba lagi nanti yaa!*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['wasted']
handler.tags = ['sticker']
handler.command = /^(wasted)$/i
handler.limit = true
handler.register = true

export default handler