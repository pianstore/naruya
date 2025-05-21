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
if (!(text1 && text2)) return m.reply(`❌ *Masukkan teks dengan benar!*\n\n📌 *Contoh:*\n${usedPrefix + command} mission passed!|respect +99`)
await global.loading(m, conn)
let url = global.API("lol", "/api/gtapassed", { text1, text2 }, "apikey")
let res = await fetch(url)
if (!res.ok) throw new Error(`Gagal mengambil gambar, status: ${res.status}`)
let caption = `🚗💨 *GTA Mission Passed!*\n\n🏆 *Misi: ${text1}*\n🔥 *Status: ${text2}*`
await conn.sendFile(m.chat, url, "gtapassed.jpg", caption, m)
} catch (e) {
console.error(e)
m.reply("❌ *Gagal membuat gambar! Coba lagi nanti.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["gtapassed"]
handler.tags = ["maker"]
handler.command = /^(gtapassed)$/i
handler.premium = true

export default handler