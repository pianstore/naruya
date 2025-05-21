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
if (!text) return m.reply(`🎶 *Masukkan judul atau potongan lirik lagu!*\n📌 *Contoh: ${usedPrefix + command} Bawa dia kembali*`)
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/lirik", { lirik: text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam pencarian lirik!*')
let json = await response.json()
if (!json.result) return m.reply('⚠️ *Lirik tidak ditemukan atau terjadi kesalahan!*')
let { lyrics, title, artist, image, url } = json.result
let caption = `
🎵 *Lirik Lagu: ${title}*
🎤 *Artis: ${artist}*
━━━━━━━━━━━━━━━━━━━
📜 *Lirik:*
${lyrics}
━━━━━━━━━━━━━━━━━━━
🔗 *Sumber: ${url}*
`.trim()
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: title,
body: `Lagu dari ${artist}`,
thumbnailUrl: image,
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

handler.help = ['lyrics']
handler.tags = ['internet']
handler.command = /^(lyrics|lirik)$/i
handler.limit = true
handler.register = true

export default handler