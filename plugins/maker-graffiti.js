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
let [text1, text2] = text.split("|")
if (!(text1 && text2)) return m.reply(`❌ *Masukkan teks dengan benar!*\n\n📌 *Contoh:*\n${usedPrefix + command} Beta|Botz`)
await global.loading(m, conn)
let url = global.API("btz", "/api/textpro/grafity-text2", { text: text1, text2: text2 }, "apikey")
let res = await fetch(url)
if (!res.ok) throw new Error(`Gagal mengambil gambar, status: ${res.status}`)
let caption = `🎨 *Graffiti Text Maker* 🖌️\n\n🖍️ *Teks 1: ${text1}*\n🖋️ *Teks 2: ${text2}*\n\n🚀 *Ekspresikan kreatifitasmu dalam bentuk graffiti digital!*`
await conn.sendFile(m.chat, url, "graffiti.jpg", caption, m)
} catch (e) {
console.error(e)
m.reply("❌ *Gagal membuat graffiti! Coba lagi nanti.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["graffiti"]
handler.tags = ["maker"]
handler.command = /^(graffiti)$/i
handler.premium = true

export default handler