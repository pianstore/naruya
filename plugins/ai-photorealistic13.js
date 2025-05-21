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
if (!text) return m.reply(`⚠️ *Masukkan teks untuk membuat gambar realistik!*\n\n*Contoh: ${usedPrefix + command} ayam*`)
await global.loading(m, conn)
let apiUrl = `https://api.nekorinn.my.id/ai-img/photorealistic13?text=${text}`
let response = await fetch(apiUrl)
if (!response.ok) throw new Error(`Status ${response.status}`)
let json = await response.json()
if (!json.status || !json.result || !Array.isArray(json.result)) throw new Error('Respon tidak valid atau kosong.')
await conn.sendMessage(m.chat, {
text: `📸 *PhotoRealistic13 AI Result*\n\n📌 *Prompt: ${text}*\n🖼️ *Total: ${json.result.length} gambar*`
}, { quoted: m })
for (let url of json.result) {
await conn.sendFile(m.chat, url, 'photoreal.jpg', '', m)
}
} catch (e) {
console.error(e)
m.reply(`❌ *Gagal menghasilkan gambar dari PhotoRealistic13.*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['photorealistic13']
handler.tags = ['ai']
handler.command = /^(photorealistic13|pr13|real13|photo13)$/i
handler.premium = true
handler.register = true

export default handler