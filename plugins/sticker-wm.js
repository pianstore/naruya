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

import { sticker, addExif, mp4ToWebp } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
let q = m.quoted ? m.quoted : m
if (!q || !/sticker|image|video/.test(q.mtype)) return m.reply('🍡 *Balas gambar, stiker, atau video untuk diberi watermark!*')
let [packname, author] = (text || '').split('|')
packname = packname || global.config.stickpack
author = author || global.config.stickauth
await global.loading(m, conn)
try {
let mime = q.mimetype || ''
let media = await q.download()
let result
if (/webp/.test(mime)) {
let isAnimated = media.toString('utf8').includes('ANIM')
result = isAnimated
? await addExif(media, packname, author)
: await sticker(media, packname, author)
} else if (/image/.test(mime)) {
result = await sticker(media, packname, author)
} else if (/video/.test(mime)) {
if ((q.msg || q).seconds > 30) return m.reply('⚠️ *Maksimal durasi video 30 detik!*')
let webp = await mp4ToWebp(media, { pack: packname, author })
result = await addExif(webp, packname, author)
} else {
return m.reply('⚠️ *Tipe media tidak didukung!*')
}
await conn.sendFile(m.chat, result, 'sticker.webp', '', m)
} catch (e) {
console.error(e)
m.reply('🍰 *Ups! Gagal pasang watermark ke media!* ✨')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['watermark']
handler.tags = ['sticker']
handler.command = /^(wm|watermark)$/i
handler.premium = true
handler.register = true

export default handler