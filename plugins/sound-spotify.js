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

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply("🎶 *Masukkan nama lagu atau artis untuk dicari di Spotify!* 🎶")
let query = args.join(" ")
await global.loading(m, conn)
try {
let res = await fetch(global.API("btz", "/api/search/spotify", { query }, "apikey"))
let json = await res.json()
if (!json.status || !json.result || !Array.isArray(json.result.data) || json.result.data.length === 0)
return m.reply("❌ *Tidak ada hasil ditemukan!*")
let list = json.result.data.map((v, i) => [
`${usedPrefix}spotifydl ${v.url}`,
(i + 1).toString(),
`🎵 ${v.title}\n⏱️ Durasi: ${v.duration} | Popularitas: ${v.popularity}%`
])
await conn.textList(m.chat, `*Ditemukan ${json.result.data.length} hasil pencarian:*\n*Silakan pilih lagu yang ingin diunduh:*`, false, list, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: json.result.data[0].title,
body: `Popularitas ${json.result.data[0].popularity}% | Durasi ${json.result.data[0].duration}`,
thumbnail: fs.readFileSync('./media/thumbnail.jpg'),
renderLargerThumbnail: true,
mediaUrl: json.result.data[0].url,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply('❌ *Gagal melakukan pencarian.*')
}
await global.loading(m, conn, true)
}

handler.help = ['spotify']
handler.tags = ['sound']
handler.command = /^(spotify)$/i
handler.register = true
handler.limit = true

export default handler