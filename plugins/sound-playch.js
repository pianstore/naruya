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

import yts from "yt-search"

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply("🎶 *Masukkan nama lagu atau artis yang ingin kamu cari!*")
let query = args.join(" ")
await global.loading(m, conn)
try {
let search = await yts(query)
if (!search || search.all.length === 0) return m.reply("❌ *Lagu tidak ditemukan!*")
let video = search.all[0]
let api = global.API("btz", "/api/download/ytmp3", { url: video.url }, "apikey")
let res = await fetch(api)
if (!res.ok) return m.reply("❌ *Gagal menghubungi API btz!*")
let json = await res.json()
if (!json.status || !json.result || !json.result.mp3) return m.reply("❌ *Gagal memproses unduhan!*")
let { mp3, title, thumb } = json.result
await conn.sendMessage('120363417411850319@newsletter', {
audio: { url: mp3 },
mimetype: "audio/mpeg",
ptt: true,
fileName: `${title}.mp3`,
contextInfo: {
externalAdReply: {
title: title,
body: video.author.name,
thumbnailUrl: thumb,
mediaUrl: video.url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply("❌ *Terjadi kesalahan saat memproses permintaan!*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["playch"]
handler.tags = ["sound"]
handler.command = /^(playch)$/i
handler.owner = true

export default handler