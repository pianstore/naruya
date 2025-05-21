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
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
let id = m.chat
if (id in conn.tebakkata) return conn.reply(m.chat, '🍬 *Masih ada soal yang belum dijawab di chat ini, sayang!*', conn.tebakkata[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebakkata.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍡 *Tebak Kata!*
🍰 *Soal: ${json.soal}*
⏱️ *Timeout: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Bantuan: Ketik ${usedPrefix}teka*
🎁 *Bonus: ${poin} XP*
`.trim()
conn.tebakkata[id] = [
await m.reply(caption),
json,
poin,
4,
setTimeout(() => {
if (conn.tebakkata[id]) {
conn.reply(m.chat, `🍭 *Waktu habis!* Jawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
delete conn.tebakkata[id]
}
}, timeout)
]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata$/i
handler.register = true
handler.onlyprem = true
handler.game = true

export default handler