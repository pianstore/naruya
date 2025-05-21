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

let timeout = 180000
let money = 5000
let limit = 2

let handler = async (m, { conn, usedPrefix }) => {
conn.susunkata = conn.susunkata || {}
let id = m.chat
if (id in conn.susunkata)
return conn.reply(m.chat, '🍪 *Masih ada soal yang belum dijawab di sini, ya!*', conn.susunkata[id][0])
let src = JSON.parse(fs.readFileSync('./json/susunkata.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Susun Kata!*
🍡 *Soal: ${json.soal}*
📮 *Tipe: ${json.tipe}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}suska untuk bantuan*
💸 *Bonus: Rp ${money}*
🎟️ *Limit: ${limit}*
`.trim()
conn.susunkata[id] = [
await conn.reply(m.chat, caption, m),
json,
money,
4,
setTimeout(() => {
if (conn.susunkata[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.jawaban}*`, conn.susunkata[id][0])
delete conn.susunkata[id]
}
}, timeout)
]
}

handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^(susunkata|sskata)$/i
handler.game = true
handler.onlyprem = true
handler.register = true

export default handler