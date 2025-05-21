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

import { webpToMp4 } from '../lib/convert.js'

let handler = async (m, { conn, usedPrefix, command }) => {
try {
let q = m.quoted || m
if (!q || !q.mtype || !/sticker/.test(q.mtype)) {
return m.reply(`🌸 *Balas stiker animasi dengan perintah* \`${usedPrefix + command}\``)
}
if (!q.isAnimated) {
return m.reply('🌼 *Stiker ini bukan animasi!*')
}
await global.loading(m, conn)
let img = await q.download(true)
if (!img) return m.reply('💮 *Gagal mengunduh stiker!*')
let result = await webpToMp4(img)
if (!result) return m.reply('🌷 *Gagal mengonversi stiker ke video!*')
await conn.sendFile(m.chat, result, 'tovideo.mp4', '', m)
} catch (e) {
console.error(e)
m.reply('🍡 *Terjadi kesalahan teknis saat mengonversi stiker!*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = /^(tovideo|tomp4)$/i
handler.limit = true
handler.register = true

export default handler