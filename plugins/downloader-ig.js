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

let handler = async (m, { conn, usedPrefix, command, args }) => {
try {
await global.loading(m, conn)
if (!args[0]) return m.reply(`⚠️ *Masukkan URL Instagram yang valid!*\nContoh: ${usedPrefix + command} https://www.instagram.com/reel/...`)
const url = args[0]
const isInstagram = /^https?:\/\/(www\.)?instagram\.com\//i.test(url)
if (!isInstagram) return m.reply("🙅‍♀️ *URL tidak valid! Kirimkan link Instagram yang benar, ya.*")
const json = await fetch(global.API("btz", "/api/download/igdowloader", { url }, "apikey")).then(res => res.json())
if (!json.status || !json.message || json.message.length === 0) {
return m.reply("💔 *Aku nggak nemu konten di link itu, nih. Coba link lain aja ya, sayang!*")
}
let sentUrls = new Set()
for (let content of json.message) {
if (!content._url || sentUrls.has(content._url)) continue
sentUrls.add(content._url)
const mediaUrl = content._url
try {
const mimeCheck = await fetch(mediaUrl, { method: "HEAD" })
const mimeType = mimeCheck.headers.get("content-type")
if (mimeType.startsWith("video")) {
await conn.sendMessage(m.chat, {
video: { url: mediaUrl },
mimetype: "video/mp4",
caption: `🎥 *Instagram Video Berhasil Diunduh!* 🌸`
}, { quoted: m })
} 
else if (mimeType.startsWith("image")) {
await conn.sendMessage(m.chat, {
image: { url: mediaUrl },
mimetype: "image/jpeg",
caption: `🖼️ *Instagram Foto Berhasil Diunduh!* 🎀`
}, { quoted: m })
} 
else {
await conn.sendMessage(m.chat, {
video: { url: mediaUrl },
mimetype: "video/mp4",
caption: `🎥 *Instagram Video Berhasil Diunduh!* 🌸`
}, { quoted: m })
}
} catch (err) {
console.error(err)
m.reply("💔 *Media ini tidak terdeteksi sebagai gambar atau video, coba lagi ya, sayang!* 🌸")
}
}
} catch (error) {
console.error(error)
m.reply("💔 *Maaf ya, ada kendala teknis. Coba lagi nanti ya, sayang!* 🌸")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|ig|igdl)$/i
handler.limit = true
handler.register = true

export default handler