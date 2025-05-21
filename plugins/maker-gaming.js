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
if (!text) return m.reply(`❌ *Masukkan nama tim atau pemain!*\n\n📌 *Contoh:*\n${usedPrefix + command} Izumi`)
await global.loading(m, conn)
let url = global.API("lol", "/api/ephoto1/logogaming", { text }, "apikey")
let res = await fetch(url)
if (!res.ok) throw new Error(`Gagal mengambil gambar, status: ${res.status}`)
let caption = `🎮 *Gaming Logo Maker* ⚡\n\n🛡 *Nama Tim: ${text}*\n🔥 *Siap mendominasi dunia gaming!*\n\n🚀 *Level up and conquer!*`
await conn.sendFile(m.chat, url, "gaming_logo.jpg", caption, m)
} catch (e) {
console.error(e)
m.reply("❌ *Gagal membuat logo gaming! Coba lagi nanti.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["gaming"]
handler.tags = ["maker"]
handler.command = /^(gaming)$/i
handler.premium = true

export default handler