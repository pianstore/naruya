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
let handler = async(m, { conn, args, usedPrefix, command }) => {
let response = args.join(' ').split('-')
if (!(response[0] || response[1] || response[2])) return m.reply(`*Masukan Tanggal Lahir Kamu!*\n\n*Contoh:*\n*${usedPrefix + command} 18-09-2004*`)
let res = await primbon.sifatbisnis(response[0], response[1], response[2])
if (!res.status) return m.reply(res.message)
let cap = `
*Tanggal Lahir: ${res.message.hari_lahir}*
*Usaha: ${res.message.usaha}*
`.trim()
m.reply(cap)
}
handler.help = ['usaha']
handler.tags = ['primbon']
handler.command = /^usaha/i
handler.register = true
export default handler