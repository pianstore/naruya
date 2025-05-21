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
if (!text) return m.reply(`⚠️ *Masukkan teks yang ingin dikonversi ke QR Code!*\n\n📌 *Contoh: ${usedPrefix + command} Izumi Bot*`)
try {
let response = await fetch(global.API("lol", "/api/qrcode", { text }, "apikey"))
if (!response.ok) throw new Error(`❌ *Gagal mengambil data dari API. Status:* ${response.status}`)
const buffer = await response.arrayBuffer()
await conn.sendMessage(m.chat, {
image: Buffer.from(buffer),
caption: `🔗 *QR Code Berhasil Dibuat!*\n📌 *Teks:* ${text}`
}, { quoted: m })
} catch (e) {
console.error(e)
conn.sendMessage(m.chat, { text: `❌ *Terjadi Kesalahan:* ${e.message}` }, { quoted: m })
}
}

handler.help = ['toqr', 'qrcode']
handler.tags = ['tools']
handler.command = /^(toqr|qrcode)$/i
handler.register = true
handler.premium = true

export default handler