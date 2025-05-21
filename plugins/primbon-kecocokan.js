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
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let response = args.join(' ').split('|')
if (!(response[0] || response[1])) return m.reply(`*Masukan Nama Dengan Benar!*\n\n*Contoh:*\n${usedPrefix + command} Izumi|Raiden*`)
let res = await primbon.kecocokan(response[0], response[1])
if (!res.status) return m.reply(res.message)
let cap = `
*Nama Anda: ${res.message.nama_anda}*
*Nama Pasangan: ${res.message.nama_pasangan}*

*Sisi Positif: ${res.message.sisi_positif}*
*Sisi Negatif: ${res.message.sisi_negatif}*
`.trim()
m.reply(cap)
}
handler.help = ['kecocokan']
handler.tags = ['primbon']
handler.command = /^kecocokan$/i
handler.limit = true
handler.register = true
export default handler