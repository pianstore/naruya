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

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let url = text || args[0]
if (!url || !/^https?:\/\/(www\.)?(facebook|fb)\.com\//i.test(url)) {
return m.reply(`🙅‍♀️ *URL tidak valid! Kirimkan link Facebook yang benar, ya.*\n\nContoh: *${usedPrefix + command} https://www.facebook.com/video/...*`)
}
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/fbdown", { url }, "apikey"))
if (!response.ok) throw new Error(`*Gagal mendapatkan data dari API. Status:* ${response.status}`)
let json = await response.json()
if (!json.status || !json.result || json.result.length === 0) return m.reply("❌ *Gagal mendapatkan video. Pastikan URL benar dan coba lagi.*")
let { resolution, thumbnail, _url } = json.result[0]
let videoBuffer = await (await fetch(_url)).buffer()
let fileSize = (videoBuffer.length / (1024 * 1024)).toFixed(2)
let caption = `
🌸 *Facebook Video Downloader* 🌸
━━━━━━━━━━━━━━━━━━━
🎥 *Resolusi: ${resolution}*
📦 *Ukuran: ${fileSize} MB*
📥 *Video sedang dikirim...*
━━━━━━━━━━━━━━━━━━━
`.trim()
let msg = await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "Facebook Video",
body: `Resolusi: ${resolution} | Ukuran: ${fileSize} MB`,
thumbnailUrl: thumbnail,
mediaUrl: url,
mediaType: 1,
renderLargerThumbnail: true,
},
},
}, { quoted: m })

await conn.sendMessage(m.chat, {
video: videoBuffer,
mimetype: "video/mp4",
caption: `🎥 *Video berhasil diunduh!*`
}, { quoted: msg })

} catch (error) {
console.error(error)
return m.reply(`❌ *Terjadi kesalahan saat memproses permintaan.*\n⚠️ *Detail:* ${error.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["facebook"]
handler.tags = ["downloader"]
handler.command = /^(fb|facebook)$/i
handler.limit = true
handler.register = true

export default handler