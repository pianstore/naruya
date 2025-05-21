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

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply("💌 *Masukkan URL MediaFire!* 🌸")
let url = args[0]
if (!/^https:\/\/www\.mediafire\.com\/file\//i.test(url)) return m.reply("🙅‍♀️ *URL tidak valid! Kirimkan link MediaFire yang benar, ya.*")
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/mediafire", { url }, "apikey"))
if (!response.ok) return m.reply("💔 *Gagal menghubungi API. Coba lagi nanti ya!*")
let json = await response.json()
if (!json.status || !json.result || !json.result.url) return m.reply("❌ *Gagal mendapatkan file. Pastikan URL benar dan coba lagi.*")
let { filename, filesizeH, type, upload_date, mimetype, url: fileUrl } = json.result
let text = `
🌸 *MediaFire Downloader* 🌸
━━━━━━━━━━━━━━━━━━━
📁 *Nama File: ${filename}*
📦 *Ukuran File: ${filesizeH}*
📂 *Tipe File: ${type}*
📅 *Tanggal Upload: ${upload_date}*
📄 *MIME Type: ${mimetype}*
━━━━━━━━━━━━━━━━━━━
`.trim()
await conn.sendMessage(m.chat, {
document: { url: fileUrl },
fileName: filename,
caption: text,
mimetype: mimetype
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply("❌ *Terjadi kesalahan saat memproses permintaan.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
handler.limit = true
handler.register = true

export default handler