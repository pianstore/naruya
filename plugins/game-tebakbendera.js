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

let handler = async (m, { conn, usedPrefix }) => {
conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
let id = m.chat
if (id in conn.tebakbendera)
return conn.reply(m.chat, '🍩 *Masih ada soal yang belum dijawab di chat ini!*', conn.tebakbendera[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebakbendera.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Bendera!*
🚩 *Coba tebak bendera di atas yaa!*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}teben untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebakbendera[id] = [
await conn.sendFile(m.chat, json.img, 'tebakbendera.jpg', caption, m),
json,
poin,
4,
setTimeout(() => {
if (conn.tebakbendera[id]) {
conn.reply(m.chat, `⏰ *Waktu habis!*\n🏳️ *Jawabannya: ${json.name}*`, conn.tebakbendera[id][0])
delete conn.tebakbendera[id]
}
}, timeout)
]
}

handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera$/i
handler.onlyprem = true
handler.game = true
handler.register = true

export default handler