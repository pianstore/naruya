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
if (!text) return m.reply(`⚠️ *Masukkan teks untuk membuat gambar dengan Flux v2!*\n\n*Contoh: ${usedPrefix + command} ayam mekanik*`)
await global.loading(m, conn)
try {
let apiUrl = `https://api.nekorinn.my.id/ai-img/flux-v2?text=${text}`
let response = await fetch(apiUrl)
if (!response.ok) throw new Error(`Status ${response.status}`)
let buffer = await response.arrayBuffer()
await conn.sendMessage(m.chat, {
image: Buffer.from(buffer),
caption: `🧬 *Flux v2 AI Generated Image*\n\n📌 *Prompt: ${text}*`
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Gagal menghasilkan gambar dari Flux v2.*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['flux2']
handler.tags = ['ai']
handler.command = /^(flux2)$/i
handler.limit = true
handler.register = true

export default handler