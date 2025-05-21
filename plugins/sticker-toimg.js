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

import sharp from "sharp"

let handler = async (m, { conn, usedPrefix, command }) => {
try {
let notStickerMessage = `*Reply sticker with command ${usedPrefix + command}*`
if (!m.quoted) return m.reply(notStickerMessage)
let q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) return m.reply(notStickerMessage)
await global.loading(m, conn)
let media = await q.download()
let imageBuffer = await sharp(media).toFormat('jpeg').toBuffer()
await conn.sendFile(m.chat, imageBuffer, 'toimg.jpg', '', m)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = /^(toimg|toimage)$/i
handler.limit = true
handler.register = true

export default handler