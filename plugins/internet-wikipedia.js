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
if (!text || typeof text !== "string") return m.reply(`⚠️ *Masukkan kata kunci yang valid untuk mencari Wikipedia!*\n\n*Contoh: ${usedPrefix + command} OpenAI*`)
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/wikipedia", { text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam pencarian Wikipedia. Coba lagi nanti!*')
let json = await response.json()
if (!json.result || !json.result.title || !json.result.isi) return m.reply('⚠️ *Tidak ditemukan hasil yang sesuai di Wikipedia.*')
let thumbnail = json.result.thumb || "https://i.supa.codes/lBMAWI"
let msg = {
text: `📖 *Wikipedia: ${json.result.title}*\n\n${json.result.isi}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: `Wikipedia - ${json.result.title}`,
body: "Informasi dari Wikipedia",
thumbnailUrl: thumbnail,
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

handler.help = ['wiki']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
handler.premium = true

export default handler