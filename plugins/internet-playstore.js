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

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply("🔍 *Masukkan nama aplikasi yang ingin kamu cari di Play Store!*")
await global.loading(m, conn)
try {
let query = args.join(" ")
let { result } = await global.API("btz", "/api/search/playstore", { app: query }, "apikey")
if (!result || !Array.isArray(result) || result.length === 0) return m.reply("❌ *Tidak ditemukan aplikasi yang cocok.*")
let cards = []
for (let item of result.slice(0, 10)) {
let media = await prepareWAMessageMedia({ image: { url: item.img } }, { upload: conn.waUploadToServer })
cards.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...media
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "🌐 Kunjungi Play Store",
url: item.link,
merchant_url: item.link_dev
})
}
]
})
})
}
let msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `🔎 *Hasil Pencarian Play Store: ${query}*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards
})
})
}
}
}, { userJid: m.sender, quoted: m })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
} catch (e) {
console.error(e)
m.reply("❌ *Terjadi kesalahan saat mengambil data Play Store.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["playstore"]
handler.tags = ["internet"]
handler.command = /^(playstore)$/i
handler.limit = true
handler.register = true

export default handler