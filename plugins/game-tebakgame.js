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
conn.tebakgame = conn.tebakgame || {}
let id = m.chat
if (id in conn.tebakgame)
return conn.reply(m.chat, '🍩 *Masih ada soal yang belum dijawab di chat ini!*', conn.tebakgame[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebakgame.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Game!*
🍡 *Soal: Game apakah ini?*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hgame untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebakgame[id] = [
await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m),
json,
poin,
4,
setTimeout(() => {
if (conn.tebakgame[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.jawaban}*`, conn.tebakgame[id][0])
delete conn.tebakgame[id]
}
}, timeout)
]
}

handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame$/i
handler.register = true
handler.onlyprem = true
handler.game = true

export default handler