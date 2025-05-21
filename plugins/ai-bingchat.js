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
if (!text) return m.reply(`⚠️ *Masukkan pertanyaan untuk Bing Chat AI!*\n\nContoh:\n${usedPrefix + command} Apa itu relativitas waktu?`)
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/bing-chat", { text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Gagal memproses permintaan ke Bing Chat. Coba beberapa saat lagi.*')
let json = await response.json()
if (!json.message) return m.reply('❌ *Bing tidak memberikan jawaban. Coba pertanyaan lain ya.*')
let msg = {
text: `✨ *Bing Chat AI:*\n\n${json.message}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Bing Chat AI",
body: "Asisten pintar siap membantu~",
thumbnailUrl: "https://i.supa.codes/CDT5f_",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}
await conn.sendMessage(m.chat, msg, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['bingchat']
handler.tags = ['ai']
handler.command = /^(bing|bingchat)$/i
handler.limit = true
handler.register = true

export default handler