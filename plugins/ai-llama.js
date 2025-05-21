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
if (!text) return m.reply(`📌 *Masukkan teks untuk berbicara dengan Llama!*\n\n📍 *Contoh: ${usedPrefix + command} Halo!*`)
await global.loading(m, conn)
let apiUrl = `https://api.siputzx.my.id/api/ai/llama33?prompt=Be%20a%20helpful%20assistant&text=${text}`
let response = await fetch(apiUrl)
if (!response.ok) return m.reply("⚠️ *Gagal mengambil respons dari Llama! Coba lagi nanti.*")
let json = await response.json()
if (!json.status || !json.data) return m.reply("🤖 *Llama tidak dapat merespons saat ini!*")
await conn.sendMessage(m.chat, {
text: `🦙 *Llama AI:*\n\n${json.data}`,
contextInfo: {
externalAdReply: {
title: "Llama AI",
body: "🤖 Chat dengan Llama",
thumbnailUrl: "https://i.supa.codes/rxVy9n",
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

handler.help = ["ilama"]
handler.tags = ["ai"]
handler.command = /^(ilama|meta)$/i
handler.limit = true
handler.register = true

export default handler