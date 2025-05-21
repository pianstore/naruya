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
if (!text) return m.reply(`🎸 *Masukkan judul lagu untuk mencari chord!*\n📌 *Contoh: ${usedPrefix + command} Bawa dia kembali*`)
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/chord", { song: text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam pencarian chord!*')
let json = await response.json()
if (!json.result) return m.reply('⚠️ *Chord tidak ditemukan atau terjadi kesalahan!*')
let { title, chord } = json.result
let caption = `
🎵 *Chord Lagu: ${title}*
🎸 *Kunci Gitar:*
\`\`\`
${chord}
\`\`\`
`.trim()
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: `Chord Lagu: ${title}`,
body: "Temukan chord gitar lagu favoritmu!",
thumbnailUrl: "https://i.supa.codes/7PSuz4",
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['chord']
handler.tags = ['music']
handler.command = /^(chord|kunci)$/i
handler.register = true
handler.limit = true

export default handler