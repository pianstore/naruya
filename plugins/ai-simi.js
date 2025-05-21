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
try {
if (!text) return m.reply(`📌 *Masukkan teks untuk berbicara dengan Simi!*\n\n📍 *Contoh:*\n${usedPrefix + command} Halo Simi!`)
await global.loading(m, conn)
let apiUrl = `https://api.hiuraa.my.id/ai/simi?text=${text}&lang=id`
let response = await fetch(apiUrl)
if (!response.ok) return m.reply("⚠️ *Gagal mengambil respons dari Simi! Coba lagi nanti.*")
let json = await response.json()
if (!json.status || !json.result) return m.reply("👶 *Simi tidak dapat merespons saat ini!*")
await conn.sendMessage(m.chat, {
text: `👶 *Simi AI:*\n\n${json.result}`,
contextInfo: {
externalAdReply: {
title: "Simi Bot",
body: "👶 Chat dengan Simi",
thumbnailUrl: "https://i.supa.codes/0CemzJ",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["simi"]
handler.tags = ["ai"]
handler.command = /^simi$/i
handler.premium = true
handler.register = true

export default handler