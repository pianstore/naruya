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

import { primbon } from '../lib/primbon.js'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`*Masukan Nama Kamu!*\n\n*Contoh:*\n*${usedPrefix + command} Izumi*`)
let res = await primbon.artinama(text)
if (!res.status) return m.reply(res.message)
let cap = `
*Nama: ${res.message.nama}*
*Arti:* ${res.message.arti}
`.trim()
m.reply(cap)
}
handler.help = ['artinama']
handler.tags = ['primbon']
handler.command = /^(artinama)$/i
handler.register = true

export default handler