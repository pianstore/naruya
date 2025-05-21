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
if (!text) return m.reply(`⚠️ *Masukkan teks untuk menghasilkan gambar!*\n\n*Contoh: ${usedPrefix + command} buatkan gambar ayam*`)
await global.loading(m, conn)
try {
let apiUrl = `https://api.nekorinn.my.id/ai-img/ai4chat?text=${text}&ratio=1%3A1`
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam memproses gambar. Coba lagi nanti!*')
let imgBuffer = await response.arrayBuffer()
await conn.sendMessage(m.chat, { 
image: Buffer.from(imgBuffer), 
caption: `✨ *AI Image Generated:*\n\n📜 *Prompt:* ${text}`, 
contextInfo: { 
externalAdReply: { 
showAdAttribution: true, 
mediaType: 1, 
title: "OpenAI Image Generator", 
body: "Gambar dibuat oleh AI OpenAI", 
thumbnailUrl: "https://i.supa.codes/EaGsHr", 
renderLargerThumbnail: true, 
sourceUrl: "https://instagram.com/naruyaizumi_",
} 
} 
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['aiimage']
handler.tags = ['ai']
handler.command = /^(aiimage)$/i
handler.limit = true
handler.register = true

export default handler