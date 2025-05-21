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

let handler = async (m, { conn, text, command }) => {
if (!text) return m.reply(`🔞 *Masukkan kata kunci pencarian!*\n\n*Contoh: .${command} tits*`)
await global.loading(m, conn)
try {
let res = await fetch(`https://api.hiuraa.my.id/search/pornhub?q=${encodeURIComponent(text)}`)
let json = await res.json()
if (!json.status || !json.result || json.result.length === 0) throw '❌ *Tidak ada hasil ditemukan di Pornhub.*'
let list = json.result.map((v, i) => [
`.phdl ${v.link}`,
(i + 1).toString(),
`🎬 ${v.title}`
])
await conn.textList(m.chat, `🔞 *Hasil Pencarian Pornhub: ${text}*`, false, list, m, {
contextInfo: {
externalAdReply: {
title: json.result[0].title,
body: `Durasi: ${json.result[0].duration || 'Tidak tersedia'}`,
thumbnailUrl: json.result[0].imageUrl,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat mengambil data dari Pornhub.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['pornhub']
handler.tags = ['nsfw']
handler.command = /^pornhub$/i
handler.nsfw = true
handler.premium = true
handler.age = 18
handler.register = true

export default handler