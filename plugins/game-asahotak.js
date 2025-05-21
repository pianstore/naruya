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
conn.asahotak = conn.asahotak ? conn.asahotak : {}
let id = m.chat
if (id in conn.asahotak)
return conn.reply(m.chat, '🍮 *Masih ada pertanyaan yang belum dijawab di chat ini!*', conn.asahotak[id][0])
let src = JSON.parse(fs.readFileSync('./json/asahotak.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍩 *Asah Otak!*
💭 *Soal: ${json.soal}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hotak untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.asahotak[id] = [
await m.reply(caption),
json,
poin,
4,
setTimeout(() => {
if (conn.asahotak[id]) {
conn.reply(m.chat, `⏰ *Waktu habis!*\n🧠 *Jawabannya: ${json.jawaban}*`, conn.asahotak[id][0])
delete conn.asahotak[id]
}
}, timeout)
]
}

handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak$/i
handler.onlyprem = true
handler.game = true
handler.register = true

export default handler