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
if (!text) return m.reply("🔍 *Masukkan kata kunci untuk mencari wallpaper!*")
try {
await global.loading(m, conn)
let res = await fetch(`https://api.hiuraa.my.id/search/wallpaper?q=${text}`)
let json = await res.json()
if (!json.result || json.result.length === 0) return m.reply("🖼️ *Wallpaper tidak ditemukan!*")
let results = json.result.slice(0, 10)
let slides = []
for (let item of results) {
let thumb = item.image?.[0] || ''
let img = await prepareWAMessageMedia({ image: { url: thumb } }, { upload: conn.waUploadToServer })
slides.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...img
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"🌐 Sumber: ${item.type}\",\"url\":\"${item.source}\",\"merchant_url\":\"${item.source}\"}`
}]
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
body: { text: `🖼️ *Hasil Wallpaper: ${text}*` },
carouselMessage: { cards: slides }
})
}
}
}, { userJid: m.sender, quoted: m })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
} catch (e) {
console.error(e)
m.reply("🥀 *Ups, terjadi kesalahan saat mencari wallpaper!*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["wallpaper"]
handler.tags = ["search"]
handler.command = /^(wallpaper|wp)$/i
handler.limit = true
handler.register = true

export default handler