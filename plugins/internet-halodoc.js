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
if (!text) return m.reply(`📌 *Masukkan kata kunci pencarian Halodoc!*\n\nContoh:\n${usedPrefix + command} demam`)
try {
await global.loading(m, conn)
let detail = `
🩺 *Pencarian Halodoc: "${text}"*
━━━━━━━━━━━━━━━━━━━
📚 *Artikel — Baca informasi kesehatan terpercaya*
💊 *Obat — Cari produk yang tersedia di Halodoc*
━━━━━━━━━━━━━━━━━━━
🔎 *Silakan pilih salah satu opsi di bawah ini:*`
await conn.textOptions(m.chat, detail, false, [
[`${usedPrefix}haloartikel ${text}`, "Artikel Halodoc"],
[`${usedPrefix}haloobat ${text}`, "Obat Halodoc"]
], m, {
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: "🚑 Hasil Pencarian Halodoc",
body: "Pilih jenis informasi yang ingin kamu lihat",
thumbnail: (await conn.getFile("https://i.supa.codes/qhNS0n")).data,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi kesalahan saat memproses pencarian!*\n\n${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['halodoc']
handler.tags = ['internet']
handler.command = /^halodoc$/i
handler.register = true
handler.limit = true

export default handler