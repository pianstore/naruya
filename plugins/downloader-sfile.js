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

let handler = async (m, { conn, text, args }) => {
let url = text || args[0]
if (!url || !/^https:\/\/sfile\.mobi\//i.test(url)) {
return m.reply("🙅‍♀️ *URL tidak valid! Kirimkan link Sfile yang benar, ya.*")
}
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/sfilemobi", { url }, "apikey"))
if (!response.ok) throw new Error(`*Gagal mendapatkan data dari API. Status:* ${response.status}`)
let json = await response.json()
if (!json.status || !json.result || !json.result.download_url) return m.reply("❌ *Gagal mendapatkan file. Pastikan URL benar dan coba lagi.*")
let { name, download_url } = json.result
await conn.sendMessage(m.chat, {
document: { url: download_url },
fileName: name,
caption: `📂 *File: ${name}*`
}, { quoted: m })
} catch (error) {
console.error(error)
m.reply(`❌ *Terjadi kesalahan saat memproses permintaan.*`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["sfile"]
handler.tags = ["downloader"]
handler.command = /^(sfile|sfilemobi)$/i
handler.limit = true
handler.register = true

export default handler