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

let handler = async (m, { conn, text }) => {
if (!text || typeof text !== "string") return m.reply('⚠️ *Masukkan teks pertanyaan untuk Blackbox AI!*')
try {
await global.loading(m, conn)
let apiUrl = global.API("btz", "/api/search/blackbox-chat", { text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam memproses permintaan. Coba lagi nanti!*')
let json = await response.json()
if (!json.message) return m.reply('⚠️ *Gagal mendapatkan jawaban dari Blackbox AI. Coba lagi nanti!*')
let msg = {
text: `💻 *Blackbox AI:*\n\n${json.message}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Blackbox AI",
body: "Dapatkan kode cepat dengan Blackbox AI!",
thumbnailUrl: "https://i.supa.codes/YOodHI",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}
await conn.sendMessage(m.chat, msg, { quoted: m })
} catch (error) {
console.error(error)
m.reply('⚠️ *Terjadi kesalahan saat mengambil data dari Blackbox AI. Coba lagi nanti!*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['blackbox']
handler.tags = ['ai']
handler.command = /^(blackbox|blackboxai)$/i
handler.premium = true
handler.register = true

export default handler