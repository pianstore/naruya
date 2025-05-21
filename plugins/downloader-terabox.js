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
if (!url || !/^https?:\/\/(www\.)?(terabox|1024terabox)\.(app|com)\/s\/[a-zA-Z0-9_-]+/i.test(url)) {
return m.reply("🙅‍♀️ *URL tidak valid! Kirimkan link Terabox yang benar, ya.*")
}
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/terabox", { url }, "apikey"))
if (!response.ok) throw new Error(`*Gagal mendapatkan data dari API. Status:* ${response.status}`)
let json = await response.json()
if (!json.status || !json.result || json.result.length === 0) return m.reply("❌ *Gagal mendapatkan file. Pastikan URL benar dan coba lagi.*")
let files = json.result
let caption = `
🌸 *Terabox Downloader* 🌸
━━━━━━━━━━━━━━━━━━━
📂 *Jumlah File: ${files.length}*\n`
for (let file of files) {
let fileData = file.files[0]
let fileSizeMB = (parseInt(fileData.size) / (1024 * 1024)).toFixed(2) + " MB"
caption += `
━━━━━━━━━━━━━━━━━━━
📁 *Nama: ${file.name}*
📦 *Ukuran: ${fileSizeMB}*
📅 *Tanggal Upload: ${new Date(file.created).toLocaleString("id-ID")}*
━━━━━━━━━━━━━━━━━━━`
}
await conn.sendMessage(m.chat, { text: caption }, { quoted: m })
for (let file of files) {
let fileData = file.files[0]
let mediaType = fileData.filename.endsWith(".mp4") ? "video/mp4" : "image/jpeg"
await conn.sendMessage(m.chat, 
mediaType === "video/mp4" ? { video: { url: fileData.url }, mimetype: mediaType, caption: `🎥 *Video Berhasil Diunduh!*` } : { image: { url: fileData.url }, caption: `🖼️ *Gambar Berhasil Diunduh!*` }, 
{ quoted: m })
}
} catch (error) {
console.error(error)
return m.reply(`❌ *Terjadi kesalahan saat memproses permintaan.*\n⚠️ *Detail:* ${error.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["terabox"]
handler.tags = ["downloader"]
handler.command = /^(terabox|tbx)$/i
handler.limit = true
handler.register = true

export default handler