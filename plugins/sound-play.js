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

import yts from 'yt-search'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`⚠️ *Contoh penggunaan: ${usedPrefix + command} someone like you*`)
try {
await global.loading(m, conn)
let search = await yts(text)
let videos = search.videos
if (!Array.isArray(videos) || videos.length === 0) return m.reply(`*Maaf, tidak dapat menemukan lagu dengan kata "${text}"*`)
let video = videos[0]
let detail = `
✨ *YouTube Music* ✨
━━━━━━━━━━━━━━━━━━━
🎵 *Judul : ${video.title}*
👀 *Penonton : ${video.views}*
✍️ *Pengarang : ${video.author.name}*
⏳ *Diunggah : ${video.ago}*
━━━━━━━━━━━━━━━━━━━
💡 *Pilih salah satu opsi di bawah ini ya~*`
await conn.textOptions(m.chat, detail, false, [
[`.ytmp3 ${video.url}`, "Audio"], 
[`.ytmp4 ${video.url}`, "Video"]
], m, {
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: video.title,
body: video.author.name,
thumbnailUrl: video.thumbnail,
mediaUrl: video.url,
mediaType: 2,
renderLargerThumbnail: true
}
},
ai: true
})
} catch (e) {
console.error(e)
m.reply('Terjadi kesalahan saat mencari video.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^play$/i
handler.limit = true
handler.register = true

export default handler