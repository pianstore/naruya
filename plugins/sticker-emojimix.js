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

import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
if (args.length !== 1 || !args[0].includes('+')) {
return m.reply(`🍓 *Masukkan dua emoji yang ingin digabungkan dengan pemisah + yaa!*\n\n✨ *Contoh:* ${usedPrefix + command} 😭+🥳`)
}
await global.loading(m, conn)
let [emoji1, emoji2] = args[0].split('+')
if (!emoji1 || !emoji2) return m.reply('🍡 *Format salah! Masukkan dua emoji dengan tanda + yaa!*')
let apiUrl = global.API("lol", `/api/emojimix/${encodeURIComponent(emoji1)}+${encodeURIComponent(emoji2)}`, {}, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('🍰 *Aduh... gagal menggabungkan emoji, coba lagi yaa!*')
let buffer = Buffer.from(await response.arrayBuffer())
let stickerImage = await sticker(buffer, false, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stickerImage, 'sticker.webp', '', m)
} catch (e) {
console.error(e)
m.reply(`❌ *Waa ada error!* 🍬\n*Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^emojimix$/i
handler.limit = true
handler.register = true

export default handler