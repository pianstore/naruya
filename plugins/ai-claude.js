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
if (!text) return m.reply(`📌 *Masukkan teks untuk berbicara dengan Claude!*\n\n📍 *Contoh:*\n${usedPrefix + command} Halo Claude!`)
await global.loading(m, conn)
let apiUrl = `https://api.ryzendesu.vip/api/ai/claude?text=${text}`
let response = await fetch(apiUrl)
if (!response.ok) return m.reply("⚠️ *Gagal mengambil respons dari Claude! Coba lagi nanti.*")
let json = await response.json()
if (!json.action || !json.response) return m.reply("🤖 *Claude tidak dapat merespons saat ini!*")
await conn.sendMessage(m.chat, {
text: `🤖 *Claude AI:*\n\n${json.response}`,
contextInfo: {
externalAdReply: {
title: "Claude AI",
body: "🤖 Chat dengan Claude",
thumbnailUrl: "https://i.supa.codes/SQiV3k",
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

handler.help = ["claude"]
handler.tags = ["ai"]
handler.command = /^(claude|cl)$/i
handler.limit = true
handler.register = true

export default handler