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

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0] || isNaN(args[0])) return m.reply(`🍩 *Masukkan jumlah hari (angka) untuk memperpanjang masa sewa!*\n\n📌 *Contoh:* ${usedPrefix + command} 30`)
let who
if (m.isGroup) who = args[1] ? args[1] : m.chat
else who = args[1]
let jumlahHari = 86400000 * args[0]
let now = new Date() * 1
if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
else global.db.data.chats[who].expired = now + jumlahHari
conn.reply(m.chat, `🧁 *Berhasil menambahkan masa sewa grup selama ${args[0]} hari!*\n\n⏳ *Hitung Mundur: ${msToDate(global.db.data.chats[who].expired - now)}*`, m)
}

handler.help = ['addexpired']
handler.tags = ['owner']
handler.command = /^(set(sewa|expired)|add(sewa|expired))$/i
handler.owner = true

export default handler

function msToDate(ms) {
let days = Math.floor(ms / (24 * 60 * 60 * 1000))
let daysms = ms % (24 * 60 * 60 * 1000)
let hours = Math.floor(daysms / (60 * 60 * 1000))
let hoursms = ms % (60 * 60 * 1000)
let minutes = Math.floor(hoursms / (60 * 1000))
return `${days} hari ${hours} jam ${minutes} menit`
}