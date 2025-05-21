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

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
if (!args[0]) return m.reply(`🍬 *Masukkan teks untuk dibuat ATTP yaa!*\n\n✨ *Contoh:* ${usedPrefix + command} Konichiwa~`)
await global.loading(m, conn)
let endpoint = command === 'attp' ? '/api/attp' : '/api/attp2'
let apiUrl = global.API("lol", endpoint, { text: args.join(" ") }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('🍡 *Aduh... gagal memproses teks, coba lagi nanti yaa!*')
let buffer = Buffer.from(await response.arrayBuffer())
let stickerImage = await addExif(buffer, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stickerImage, 'sticker.webp', '', m)
} catch (e) {
console.error(e)
m.reply(`*Yaaah ada error!* 🍰`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['attp', 'attp2']
handler.tags = ['sticker']
handler.command = /^(attp|attp2)$/i
handler.limit = true
handler.register = true

export default handler