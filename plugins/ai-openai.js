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
if (!text) return m.reply(`⚠️ *Masukkan teks pertanyaan untuk AI!*\n\nContoh: *${usedPrefix + command} Apa itu AI?*`)
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/openai-chat", { text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam memproses permintaan. Coba lagi nanti!*')
let json = await response.json()
if (!json.message) return m.reply('⚠️ *Gagal mendapatkan jawaban dari AI. Coba lagi nanti!*')
let cleaned = json.message
.replace(/\\\\/g, '\n')
.replace(/\\text\{([^}]+)\}/g, '$1')
.replace(/\\(quad|leq|geq|neq|times|div|pm|cdot)/g, '')
.replace(/\\begin\{[^}]+\}/g, '')
.replace(/\\end\{[^}]+\}/g, '')
.replace(/\\/g, '')
.replace(/[\{\}\$]/g, '')
.replace(/\s+&\s+/g, ' ')
.replace(/\s+\\\\/g, '\n')
.trim()
let msg = {
text: `🍥 *OpenAI:*\n\n${cleaned}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "OpenAI",
body: "Tanyakan apa saja dengan AI!",
thumbnailUrl: "https://i.supa.codes/EaGsHr",
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

handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|chatgpt)$/i
handler.limit = true
handler.register = true

export default handler