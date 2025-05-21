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

import { addExif } from '../lib/sticker.js'
import emojiUnicode from 'emoji-unicode'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
if (!args[0] || !/^\p{Extended_Pictographic}$/u.test(args[0])) {
return m.reply(`🍬 *Masukkan emoji yang valid yaa!*\n\n✨ *Contoh:* ${usedPrefix + command} 😂`)
}
await global.loading(m, conn)
let emoji = args[0]
let unicode = emojiUnicode(emoji).split(' ').join('-')
let gifUrl = `https://fonts.gstatic.com/s/e/notoemoji/latest/${unicode}/512.webp`
let response = await fetch(gifUrl)
if (!response.ok) return m.reply('🍡 *Emoji ini belum tersedia dalam format GIF!*')
let buffer = Buffer.from(await response.arrayBuffer())
let stickerImage = await addExif(buffer, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stickerImage, 'sticker.webp', m)
} catch (e) {
console.error(e)
m.reply(`🍥 *Ada error saat membuat stiker!*`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['animated']
handler.tags = ['sticker']
handler.command = /^(animated|emoanim)$/i
handler.limit = true
handler.register = true

export default handler