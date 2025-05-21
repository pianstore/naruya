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
conn.tebaktebakan = conn.tebaktebakan || {}
let id = m.chat
if (id in conn.tebaktebakan)
return conn.reply(m.chat, '🍪 *Masih ada soal yang belum dijawab di chat ini!*', conn.tebaktebakan[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebaktebakan.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Tebakan!*
🍡 *Soal: ${json.soal}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hkan untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebaktebakan[id] = [
await m.reply(caption),
json,
poin,
4,
setTimeout(() => {
if (conn.tebaktebakan[id]) {
conn.reply(m.chat, `⏰ *Waktu habis!* Jawabannya adalah *${json.jawaban}*`, conn.tebaktebakan[id][0])
delete conn.tebaktebakan[id]
}
}, timeout)
]
}

handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan$/i
handler.register = true
handler.onlyprem = true
handler.game = true

export default handler