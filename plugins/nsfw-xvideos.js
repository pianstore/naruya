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

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`🔞 *Masukkan kata kunci pencarian!*\n\n*Contoh:* ${usedPrefix + command} tits`)
await global.loading(m, conn)
try {
let res = await fetch(`https://api.hiuraa.my.id/search/xvideos?q=${encodeURIComponent(text)}`)
let json = await res.json()
if (!json.status || !json.result || !json.result.length) return m.reply('❌ *Tidak ada hasil ditemukan di Xvideos!*')
let list = json.result.slice(0, 20).map((v, i) => [
`.xvideosdl ${v.link}`,
(i + 1).toString(),
`🎬 ${v.title}\n📺 ${v.resolution || '-'} · ⏱ ${v.duration} · 👤 ${v.artist}`
])
await conn.textList(m.chat, `*Ditemukan ${json.result.length} hasil di Xvideos*\nSilakan pilih video yang ingin diunduh:`, false, list, m, {
contextInfo: {
externalAdReply: {
title: json.result[0].title,
body: `${json.result[0].artist} · ${json.result[0].duration}`,
mediaType: 1,
thumbnailUrl: json.result[0].imageUrl,
sourceUrl: "https://instagram.com/naruyaizumi_",
renderLargerThumbnail: true,
showAdAttribution: false
}
}
})
} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat mencari video.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['xvideos']
handler.tags = ['nsfw']
handler.command = /^(xvideos)$/i
handler.register = true
handler.premium = true
handler.nsfw = true
handler.age = 18

export default handler