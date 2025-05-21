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

let handler = async (m, { conn, text }) => {
if (!text) return m.reply("🔍 *Masukkan kata kunci untuk mencari gambar di Wikimedia!*")
try {
await global.loading(m, conn)
const apiUrl = global.API("btz", "/api/search/wikimedia", { text1: text }, "apikey")
const response = await fetch(apiUrl)
if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`)
const json = await response.json()
if (!json.result || json.result.length === 0) return m.reply("🍂 *Tidak ada hasil untuk kata kunci tersebut!*")
const images = json.result.slice(0, 10)
let slides = []

for (let item of images) {
let media = await prepareWAMessageMedia({ image: { url: item.image } }, { upload: conn.waUploadToServer })
slides.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...media
}),
body: { text: item.title },
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Lihat Sumber\",\"url\":\"${item.source}\"}`
}]
})
})
}

const msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: { text: `🌐 *Hasil Gambar Wikimedia: ${text}*` },
carouselMessage: { cards: slides }
})
}
}}, { userJid: m.sender, quoted: m })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

} catch (e) {
console.error(e)
m.reply("❌ *Gagal mengambil data dari Wikimedia. Coba lagi nanti!*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["wikimedia"]
handler.tags = ["search"]
handler.command = /^(wikimedia)$/i
handler.limit = true
handler.register = true

export default handler