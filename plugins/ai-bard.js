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
if (!text) return m.reply(`⚠️ *Masukkan teks pertanyaan untuk Bard AI!*\n\n*Contoh: ${usedPrefix + command} Jelaskan teori relativitas!*`)
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/bard-ai", { text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam memproses permintaan ke Bard. Coba lagi nanti!*')
let json = await response.json()
if (!json.result) return m.reply('⚠️ *Gagal mendapatkan respon dari Bard AI. Coba lagi nanti!*')
let msg = {
text: `✨ *Gemini AI:*\n\n${json.result}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Bard AI",
body: "Tanyakan apa saja ke AI!",
thumbnailUrl: "https://i.supa.codes/r73xLL",
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

handler.help = ['bard']
handler.tags = ['ai']
handler.command = /^(bard)$/i
handler.limit = true
handler.register = true

export default handler