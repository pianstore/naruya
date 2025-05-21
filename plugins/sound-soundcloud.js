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
if (!args[0]) return m.reply("🎵 Masukkan judul lagu atau artis untuk dicari di SoundCloud!")
if (args[0].includes("soundcloud.com")) {
await downloadSoundCloud(m, conn, args[0])
return
}
let query = args.join(" ")
await global.loading(m, conn)
try {
let res = await fetch(`https://api.nekorinn.my.id/search/soundcloud?q=${query}`)
let json = await res.json()
if (!json.status || !Array.isArray(json.result) || json.result.length === 0)
return m.reply("❌ Tidak ada hasil ditemukan. Coba dengan kata kunci lain!")
let list = json.result.map((v, i) => [
`${usedPrefix}scdl ${v.link}`,
(i + 1).toString(),
`🎧 ${v.title}`
])
await conn.textList(m.chat, `Ditemukan ${json.result.length} hasil\nSilakan pilih lagu untuk diunduh:`, false, list, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: json.result[0].title,
body: "SoundCloud Music Search",
thumbnail: fs.readFileSync("./media/thumbnail.jpg"),
renderLargerThumbnail: true,
mediaUrl: json.result[0].link,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply("❌ Terjadi kesalahan saat mencari lagu SoundCloud.")
}
await global.loading(m, conn, true)
}

handler.help = ['soundcloud']
handler.tags = ['sound']
handler.command = /^(soundcloud)$/i
handler.register = true
handler.limit = true

export default handler