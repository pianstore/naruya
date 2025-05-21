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
conn.tebaklogo = conn.tebaklogo || {}
let id = m.chat
if (id in conn.tebaklogo)
return conn.reply(m.chat, '🍪 *Masih ada soal yang belum dijawab di chat ini, ya!*', conn.tebaklogo[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebaklogo.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Logo!*
🧁 *Deskripsi: ${json.deskripsi}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hlogo untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebaklogo[id] = [
await conn.sendFile(m.chat, json.img, 'tebaklogo.jpg', caption, m),
json,
poin,
4,
setTimeout(() => {
if (conn.tebaklogo[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.jawaban}*`, conn.tebaklogo[id][0])
delete conn.tebaklogo[id]
}
}, timeout)
]
}

handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo$/i
handler.register = true
handler.onlyprem = true
handler.game = true

export default handler