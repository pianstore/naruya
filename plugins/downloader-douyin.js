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

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let url = text || args[0]
if (!url || !/^https?:\/\/(www\.)?(v\.)?douyin\.com\//i.test(url)) {
return m.reply(`🙅‍♀️ *Link Douyin tidak valid!*\n\nContoh:\n${usedPrefix + command} https://v.douyin.com/ieWfMQA1/`)
}
try {
await global.loading(m, conn)
let res = await fetch(global.API("btz", "/api/download/douyin-slide", { url }, "apikey"))
if (!res.ok) throw new Error(`Gagal mengambil data! Status ${res.status}`)
let json = await res.json()
if (!json.status || !json.result) return m.reply("❌ Gagal mendapatkan slide dari Douyin.")

let { title, images, audio } = json.result
if (images.length > 0) {
let batchSize = 10
let batch = []
for (let i = 0; i < images.length; i += batchSize) {
batch.push(images.slice(i, i + batchSize))
}
for (let batchImages of batch) {
let slides = []
for (let imgUrl of batchImages) {
let imgMedia = await prepareWAMessageMedia({ image: { url: imgUrl } }, { upload: conn.waUploadToServer })
slides.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgMedia
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Lihat Gambar\",\"url\":\"${imgUrl}\",\"merchant_url\":\"https://www.douyin.com\"}`
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
text: `🖼️ *Hasil Slide Douyin*\n📸 Total: ${images.length} Gambar`
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
}
if (audio.length) {
await conn.sendMessage(m.chat, {
audio: { url: audio[0] },
mimetype: 'audio/mp4',
ptt: true
}, { quoted: m })
}
} catch (err) {
console.error(err)
m.reply(`❌ Terjadi kesalahan:\n${err.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['douyinslide']
handler.tags = ['downloader']
handler.command = /^douyinslide$/i
handler.limit = true
handler.register = true

export default handler