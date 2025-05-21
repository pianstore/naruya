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

import { cerpen } from '../lib/scrape.js'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`*Masukan Category Cerpen!*\n\n*Contoh:\n${usedPrefix + command} Horor*`)
let res = await cerpen(text)
let cap = `
*Title:* ${res.title}
*Author:* ${res.author}
*Kategori:* ${res.kategori}
*Rilis:* ${res.lolos}

*Cerita:* ${res.cerita}
`.trim()
m.reply(cap)
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^(cerpen)$/i
handler.limit = true
handler.register = true
export default handler