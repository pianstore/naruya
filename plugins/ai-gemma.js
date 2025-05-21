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
if (!text) return m.reply(`📌 *Masukkan teks untuk berbicara dengan Gemma AI!*\n\n📍 *Contoh:*\n${usedPrefix + command} Hai!`)

await global.loading(m, conn)

let apiUrl = `https://api.siputzx.my.id/api/ai/gemma?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=${encodeURIComponent(text)}`
let response = await fetch(apiUrl)
if (!response.ok) return m.reply("⚠️ *Gagal mengambil respons dari Gemma AI! Coba lagi nanti.*")

let json = await response.json()
if (!json.status || !json.data) return m.reply("💎 *Gemma AI tidak dapat merespons saat ini!*")

await conn.sendMessage(m.chat, {
text: `💎 *Gemma AI:*\n\n${json.data}`,
contextInfo: {
externalAdReply: {
title: "Gemma AI Chat",
body: "🤖 Chat dengan Gemma AI",
thumbnailUrl: "https://i.supa.codes/fFn6_A",
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

handler.help = ["gemma"]
handler.tags = ["ai"]
handler.command = /^gemma$/i
handler.premium = true
handler.register = true

export default handler