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

import pkg from "baileys"

const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg

let handler = async (m, { conn, usedPrefix, command, args }) => {
try {
await global.loading(m, conn)
if (!args[0]) return m.reply(`⚠️ *Masukkan URL TikTok yang valid!*\n*Contoh: ${usedPrefix + command} https://vm.tiktok.com/...*`)
const url = args[0]
const isTikTok = /^https?:\/\/(www\.)?(vm\.|vt\.|m\.)?tiktok\.com\/.+/i.test(url)
if (!isTikTok) return m.reply("❌ *URL tidak valid! Harap masukkan link TikTok yang benar.*")
const cekSlide = await fetch(global.API("btz", "/api/download/ttslide", { url }, "apikey"))
const cekVideo = await fetch(global.API("btz", "/api/download/tiktok", { url }, "apikey"))
const jsonSlide = await cekSlide.json()
const jsonVideo = await cekVideo.json()
if (jsonSlide.status && jsonSlide.result.images.length > 0) {
const images = jsonSlide.result.images
const batchSize = 10
let batch = []
for (let i = 0; i < images.length; i += batchSize) {
batch.push(images.slice(i, i + batchSize))
}
for (let batchImages of batch) {
let slides = []
for (let imgUrl of batchImages) {
let imgsc = await prepareWAMessageMedia({ image: { url: imgUrl }}, { upload: conn.waUploadToServer })
slides.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Gambar\",\"url\":\"${imgUrl}\",\"merchant_url\":\"https://www.tiktok.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `📸 *Hasil Unduhan TikTok Slide*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: slides
})
})
}
}}, { userJid: m.sender, quoted: m })
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
if (jsonSlide.result.audio.length > 0) {
await conn.sendMessage(m.chat, { 
audio: { url: jsonSlide.result.audio[0] }, 
mimetype: "audio/mpeg", 
fileName: "tiktok.mp3" 
}, { quoted: m })
}
return
}
if (jsonVideo.status && jsonVideo.result.video.length > 0) {
await conn.sendMessage(m.chat, {
video: { url: jsonVideo.result.video[0] },
mimetype: "video/mp4",
caption: `🎥 *Hasil Unduhan TikTok Video*`
}, { quoted: m })
if (jsonVideo.result.audio.length > 0) {
await conn.sendMessage(m.chat, { 
audio: { url: jsonVideo.result.audio[0] }, 
mimetype: 'audio/mp4',
ptt: true,
fileName: "tiktok.mp3" 
}, { quoted: m })
}
return
}
return m.reply("💔 *Aku nggak bisa menemukan konten dari link ini. Coba link lain ya, sayang!*")
} catch (error) {
console.error(error)
return m.reply(`❌ *Terjadi Kesalahan Teknis!*`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt)$/i
handler.limit = true
handler.register = true

export default handler