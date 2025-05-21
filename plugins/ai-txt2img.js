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

let handler = async (m, { conn, usedPrefix, command, args }) => {
try {
await global.loading(m, conn)
if (!args.length) return m.reply(`⚠️ *Masukkan kata kunci untuk membuat gambar!*\n\n📌 *Contoh: ${usedPrefix + command} cat,fish*`)
let query = args.join(" ")
let apiUrl = global.API("btz", "/api/maker/text2img", { text: query }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan saat memproses gambar. Coba lagi nanti!*')
await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *Gambar telah dibuat berdasarkan:*\n📝 *${query}*` }, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img|text2img)$/i
handler.premium = true
handler.register = true

export default handler