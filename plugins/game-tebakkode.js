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

let timeout = 120000
let poin = 4999

let handler = async (m, { conn, usedPrefix, command }) => {
conn.tebakkode = conn.tebakkode || {}
let id = m.chat
let setting = global.db.data.settings[conn.user.jid]
let ephemeral = conn.chats[m.chat]?.metadata?.ephemeralDuration || conn.chats[m.chat]?.ephemeralDuration || false

if (id in conn.tebakkode) return conn.reply(m.chat, '⚠️ *Masih ada soal yang belum terjawab di chat ini!*', conn.tebakkode[id][0])

let res = await fetch(global.API('btz', '/api/game/tebakkode', {}, 'apikey'))
let data = await res.json()
let json = data[Math.floor(Math.random() * data.length)]
let pilihan = json.pilihan.map(v => `- ${v}`).join('\n')
let caption = `
📟 *TEBAK KODE*

${json.soal}

*Pilihan Jawaban:*
${pilihan}

⏳ *Timeout: ${(timeout / 1000).toFixed(0)} detik*
✏️ *Ketik ${usedPrefix}hcode untuk bantuan
🎁 *Bonus XP: ${poin}*
`.trim()

conn.tebakkode[id] = [
await conn.reply(m.chat, setting.smlcap ? conn.smlcap(caption) : caption, m, { ephemeralExpiration: ephemeral }),
json,
poin,
4,
setTimeout(() => {
if (conn.tebakkode[id]) {
conn.reply(m.chat, `⏰ *Waktu habis!*\nJawaban: *${json.jawaban}*`, conn.tebakkode[id][0])
delete conn.tebakkode[id]
}
}, timeout)
]
}

handler.help = ['tebakkode']
handler.tags = ['game']
handler.command = /^tebakkode$/i
handler.register = true
handler.game = true

export default handler