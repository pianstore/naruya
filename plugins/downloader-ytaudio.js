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
let youtubeRegex = /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+/i
if (!youtubeRegex.test(url)) return m.reply("❌ *URL tidak valid! Harap masukkan link YouTube yang benar.*")
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/ytmp3", { url }, "apikey"))
if (!response.ok) return m.reply("💔 *Gagal menghubungi API. Coba lagi nanti ya!*")
let json = await response.json()
if (!json.status || !json.result || !json.result.mp3) return m.reply("❌ *Gagal memproses permintaan!*\n*Pastikan URL benar dan coba lagi.*")
let { title, author, description, thumb, mp3, duration, youtubeLink, published, source, views } = json.result
await conn.sendMessage(m.chat, {
text: `
🎵 *YouTube Audio Downloader* 🎵
━━━━━━━━━━━━━━━━━━━━━━
📌 *Judul: ${title}*
🧑‍🎤 *Channel: ${author?.name}*
📅 *Dipublikasikan: ${published}*
🌐 *Source: ${source}*
👁️ *Penonton: ${views.toLocaleString()} views*
⏱️ *Durasi: ${duration}*
📝 *Deskripsi:* ${description?.trim() || "-"}*
━━━━━━━━━━━━━━━━━━━━━━
`.trim(),
contextInfo: {
externalAdReply: {
title: title,
body: author?.name || "YouTube",
mediaUrl: youtubeLink,
mediaType: 2,
thumbnailUrl: youtubeLink,
renderLargerThumbnail: true
}
}
}, { quoted: m })
await conn.sendMessage(m.chat, {
audio: { url: mp3 },
mimetype: "audio/mpeg",
ptt: true,
fileName: `${title}.mp3`,
contextInfo: {
externalAdReply: {
title: title,
body: "YouTube Music",
thumbnailUrl: thumb,
mediaUrl: url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
return m.reply("❌ *Terjadi kesalahan saat memproses permintaan.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.command = /^(ytmp3)$/i
handler.limit = true
handler.register = true

export default handler