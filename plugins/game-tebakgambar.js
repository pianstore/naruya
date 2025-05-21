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
conn.tebakgambar = conn.tebakgambar || {}
let id = m.chat
let ephemeral = conn.chats[m.chat]?.metadata?.ephemeralDuration || conn.chats[m.chat]?.ephemeralDuration || false
let setting = global.db.data.settings[conn.user.jid]

if (id in conn.tebakgambar)
return conn.reply(m.chat, '🍩 *Masih ada soal yang belum dijawab di chat ini!*', conn.tebakgambar[id][0])
let src = JSON.parse(fs.readFileSync('./json/tebakgambar.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍰 *Tebak Gambar!*
🍡 *Petunjuk: ${json.deskripsi}*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hgamb untuk bantuan*
🍫 *Bonus: ${poin} XP*
`.trim()
conn.tebakgambar[id] = [
await conn.sendMessage(m.chat, {
image: { url: json.img },
fileName: 'tebakgambar.jpg',
mimetype: 'image/jpeg',
caption: setting.smlcap ? conn.smlcap(caption) : caption
}, {
quoted: m,
ephemeralExpiration: ephemeral
}),
json,
poin,
4,
setTimeout(() => {
if (conn.tebakgambar[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.jawaban}*`, conn.tebakgambar[id][0])
delete conn.tebakgambar[id]
}
}, timeout)
]
}

handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar$/i
handler.register = true
handler.onlyprem = true
handler.game = true

export default handler