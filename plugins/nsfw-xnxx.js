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
if (!m.text) return m.reply('❌ *Command ini hanya bisa dijalankan melalui pesan teks!*')
if (!args[0]) return m.reply(`🔍 *Masukkan kata kunci pencarian video!*\n\n*Contoh: ${usedPrefix + command} school girl*`)
await global.loading(m, conn)
try {
let query = (m.text || '').split(' ').slice(1).join(' ')
let res = await fetch(`https://api.hiuraa.my.id/search/xnxx?q=${query}`)
let json = await res.json()
if (!json.status || !Array.isArray(json.result) || json.result.length === 0) throw '❌ *Video tidak ditemukan!*'
let list = json.result.slice(0, 20).map((v, i) => [
`.xnxxdl ${v.link}`,
(i + 1).toString(),
`🎬 ${v.title}\n🕒 ${v.duration} | 📺 ${v.views} | 📽 ${v.resolution}`
])
await conn.textList(m.chat, `*🔞 Hasil Pencarian untuk:* ${query}`, false, list, m, {
contextInfo: {
externalAdReply: {
title: "XNXX Video Search",
body: "Pilih salah satu video untuk diunduh",
thumbnailUrl: 'https://i.ibb.co/5LRHR9C/xnxxthumb.jpg',
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat mengambil hasil pencarian.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['xnxx']
handler.tags = ['nsfw']
handler.command = /^(xnxx)$/i
handler.premium = true
handler.nsfw = true
handler.age = 18
handler.register = true

export default handler