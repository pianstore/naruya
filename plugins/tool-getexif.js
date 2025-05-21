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

import webp from 'node-webpmux'

let handler = async (m, { conn }) => {
if (m.quoted && /sticker/.test(m.quoted.mtype)) {
let img = await m.quoted.download()
if (!img) return m.reply('❌ Gagal mengunduh stiker.')
try {
const sticker = new webp.Image()
await sticker.load(img)
if (!sticker.exif) return m.reply('⚠️ Tidak ada metadata exif ditemukan pada stiker ini.')
let json = JSON.parse(sticker.exif.toString('utf-8').replace(/^\x00+/, ''))
await conn.sendMessage(m.chat, { text: format(json) }, { quoted: m })
} catch (e) {
console.error(e)
return m.reply('❌ Gagal membaca metadata stiker.')
}
} else {
return m.reply('*⚠️ Balas stiker untuk melihat metadata!*')
}
}

handler.help = ['getexif']
handler.tags = ['tools']
handler.command = /^getexif$/i
handler.register = true

export default handler