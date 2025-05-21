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
let poin = 1000

let handler = async (m, { conn, command, usedPrefix }) => {
conn.tebaklirik = conn.tebaklirik || {}
let id = m.chat
if (id in conn.tebaklirik)
return conn.reply(m.chat, '🍩 *Masih ada soal yang belum terjawab di sini, ya~*', conn.tebaklirik[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebaklirik.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Lirik!*
🍡 *Lirik: ${json.soal}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}terik untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebaklirik[id] = [
await m.reply(caption),
json,
poin,
4,
setTimeout(() => {
if (conn.tebaklirik[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.jawaban}*`, conn.tebaklirik[id][0])
delete conn.tebaklirik[id]
}
}, timeout)
]
}

handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik$/i
handler.onlyprem = true
handler.game = true
handler.register = true

export default handler