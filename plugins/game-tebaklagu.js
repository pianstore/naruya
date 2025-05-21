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
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) return conn.reply(m.chat, '🍩 *Masih ada soal yang belum terjawab di sini, ya~*', conn.tebaklagu[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebaklagu.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Lagu!*
🍡 *Artist: ${json.artis}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hlagu untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json,
poin,
4,
setTimeout(() => {
if (conn.tebaklagu[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.judul}*`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}
}, timeout)
]

let res = await fetch(json.lagu)
let buffer = Buffer.from(Buffer.from(await res.arrayBuffer()))
await conn.sendMessage(m.chat, {
audio: buffer,
mimetype: 'audio/mpeg',
ptt: true
}, { quoted: conn.tebaklagu[id][0] })
}

handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.onlyprem = true
handler.game = true
handler.register = true

export default handler