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
if (!args[0]) return m.reply("⚠️ *Masukkan URL YouTube yang valid!*")
let url = args[0]
let youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/|live\/)|youtu\.be\/)[\w-]+(\S+)?$/i
if (!youtubeRegex.test(url)) return m.reply("❌ *URL tidak valid! Harap masukkan link YouTube yang benar.*")
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/ytmp4", { url }, "apikey"))
if (!response.ok) return m.reply("💔 *Gagal menghubungi API. Coba lagi nanti ya!*")
let json = await response.json()
if (!json.status || !json.result || !json.result.mp4) return m.reply("❌ *Gagal memproses permintaan!*\n*Pastikan URL benar dan coba lagi.*")
let { title, description, thumb, mp4, duration } = json.result
await conn.sendMessage(m.chat, {
image: { url: thumb },
caption: `
🎥 *YouTube Video Downloader* 🎥
━━━━━━━━━━━━━━━━━━━
📌 *Judul: ${title}*
📝 *Deskripsi:* ${description?.trim() || "*Tidak ada deskripsi.*"}
⏱️ *Durasi: ${duration ? `${duration} detik` : "Tidak diketahui"}*
━━━━━━━━━━━━━━━━━━━
⚡ *Catatan: Video sedang diproses untuk pengiriman. Mohon bersabar!* 😊
`.trim(),
contextInfo: {
externalAdReply: {
title: title,
body: "YouTube Video",
thumbnailUrl: thumb,
mediaUrl: url,
mediaType: 2,
renderLargerThumbnail: true
}
}
}, { quoted: m })
await conn.sendMessage(m.chat, {
video: { url: mp4 },
mimetype: "video/mp4",
caption: `🎬 *Berikut adalah video yang berhasil diunduh!*\n\n📌 *Judul:* ${title}`
}, { quoted: m })
} catch (e) {
console.error(e)
return m.reply("❌ *Terjadi kesalahan saat memproses permintaan.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = /^(ytmp4)$/i
handler.limit = true
handler.register = true

export default handler