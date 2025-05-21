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
if (!args[0]) return m.reply("🔞 *Masukkan kata kunci pencarian!*")
await global.loading(m, conn)
try {
let query = args.join(" ")
let res = await fetch(`https://api.hiuraa.my.id/search/nekopoi?q=${encodeURIComponent(query)}`)
if (!res.ok) throw '❌ *Gagal menghubungi server!*'
let json = await res.json()
if (!json.status || !json.result || json.result.length === 0) return m.reply("❌ *Tidak ada hasil ditemukan!*")
let cards = []
for (let item of json.result.slice(0, 10)) {
let media = await prepareWAMessageMedia({ image: { url: item.images } }, { upload: conn.waUploadToServer })
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
display_text: "🔗 Tonton Sekarang",
url: item.link,
merchant_url: item.link
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
text: `🔞 *Hasil Pencarian Nekopoi: ${query}*`
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
m.reply("❌ *Terjadi kesalahan saat mencari data dari Nekopoi.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['nekopoi']
handler.tags = ['nsfw']
handler.command = /^(nekopoi)$/i
handler.nsfw = true
handler.premium = true
handler.age = 18
handler.register = true

export default handler