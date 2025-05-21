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

let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
if (!text) return m.reply("📌 *Masukkan nama daerah yang ingin dicari kode posnya!*\n\n📝 *Contoh: .kodepos Semarang*")
await global.loading(m, conn)
let response = await fetch(global.API("lol", "/api/kodepos", { query: text }, "apikey"))
let data = await response.json()
if (data.status !== 200 || !data.result.length) return m.reply("❌ *Kode pos tidak ditemukan! Coba cari dengan kata kunci yang lebih spesifik.*")
let firstLocation = data.result[0]
let allResults = data.result.map((loc, i) => `📍 *${i + 1}. ${loc.village}, ${loc.district}*\n🏙️ *${loc.regency}, ${loc.province}*\n📮 *Kode Pos: ${loc.code}*`).join("\n\n")
await conn.sendMessage(m.chat, {
location: {
degreesLatitude: firstLocation.latitude,
degreesLongitude: firstLocation.longitude
}
}, { quoted: m })

await conn.sendMessage(m.chat, {
text: `
📍 *Hasil Pencarian Kode Pos untuk ${text}*
━━━━━━━━━━━━━━━━━━━
🏠 *Desa/Kelurahan: ${firstLocation.village}*
🏢 *Kecamatan: ${firstLocation.district}*
🏙️ *Kabupaten/Kota: ${firstLocation.regency}*
🌍 *Provinsi: ${firstLocation.province}*
📮 *Kode Pos: ${firstLocation.code}*
🕰️ *Zona Waktu: ${firstLocation.timezone}*
━━━━━━━━━━━━━━━━━━━
📜 *Kode Pos Lainnya:*
${allResults}
━━━━━━━━━━━━━━━━━━━
📌 *Gunakan informasi ini sesuai kebutuhan Anda!*
`.trim(),
contextInfo: {
externalAdReply: {
title: "📮 Hasil Pencarian Kode Pos",
body: `📌 ${text} - ${firstLocation.regency}, ${firstLocation.province}`,
thumbnailUrl: "https://img86.pixhost.to/images/493/563104371_izumizopedia.jpg",
mediaType: 1,
sourceUrl: "https://instagram.com/naruyaizumi_",
renderLargerThumbnail: true
}
}
}, { quoted: m })
} catch (error) {
console.error(error)
m.reply("❌ *Terjadi kesalahan saat mencari kode pos! Coba lagi nanti.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["kodepos"]
handler.tags = ["tools"]
handler.command = /^(kodepos|pos)$/i
handler.register = true

export default handler