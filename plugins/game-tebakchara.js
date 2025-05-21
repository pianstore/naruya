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
let poin = 1000

let handler = async (m, { conn, command, usedPrefix }) => {
conn.tebakchara = conn.tebakchara || {}
let id = m.chat
if (id in conn.tebakchara) {
conn.reply(m.chat, '🍩 *Masih ada soal yang belum dijawab di chat ini!*', conn.tebakchara[id][0])
throw false
}
let res = await (await fetch('https://api.jikan.moe/v4/characters')).json()
let json = res.data.getRandom()
let caption = `
🍰 *Tebak Karakter Anime!*
🍡 *Siapa nama karakter di atas?*
⏱️ *Waktu: ${(timeout / 1000).toFixed(2)} detik*
🍬 *Hint: Ketik ${usedPrefix}hcha untuk bantuan*
🍫 *Bonus:${poin} XP*
`.trim()
conn.tebakchara[id] = [
await conn.sendFile(m.chat, json.images.jpg.image_url, 'tebakchara.jpg', caption, m),
json,
poin,
4,
setTimeout(() => {
if (conn.tebakchara[id]) {
conn.reply(m.chat, `⏰ *Waktu habis! Jawabannya adalah ${json.name}*`, conn.tebakchara[id][0])
delete conn.tebakchara[id]
}
}, timeout)
]
}

handler.help = ['tebakchara']
handler.tags = ['game']
handler.command = /^tebakchara$/i
handler.register = true
handler.onlyprem = true
handler.game = true

export default handler