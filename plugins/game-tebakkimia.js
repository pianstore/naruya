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

import fs from 'fs'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
let id = m.chat
if (id in conn.tebakkimia) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebakkimia.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
Silahkan Tebak Kepanjangan Dari Unsur "${json.lambang}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hmia untuk bantuan
Bonus: ${poin} XP
`.trim()
conn.tebakkimia[id] = [
await m.reply(caption),
json, poin, 4,
setTimeout(() => {
if (conn.tebakkimia[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.unsur}*`, conn.tebakkimia[id][0])
delete conn.tebakkimia[id]
}, timeout)
]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia$/i

handler.onlyprem = true
handler.game = true

export default handler