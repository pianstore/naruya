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

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`🔍 *Masukkan judul anime batch yang ingin dicari!*\n\n*Contoh: ${usedPrefix + command} naruto*`)
try {
await global.loading(m, conn)
let res = await fetch(`https://api.nekorinn.my.id/anime/samehadaku-search?q=${text}`)
let json = await res.json()
if (!json.status || !json.result || !json.result.length) return m.reply('❌ *Anime tidak ditemukan!*')
let results = json.result.slice(0, 10)
let slides = []
for (let anime of results) {
let img = await prepareWAMessageMedia({ image: { url: anime.image } }, { upload: conn.waUploadToServer })
let genreList = anime.genres.join(', ')
let caption = `🍥 *${anime.title}*\n🍡 *Tipe: ${anime.type}*\n🍓 *Status: ${anime.status}*\n🍫 *Rating: ${anime.rating}*\n🍬 *Genre: ${genreList}*`
slides.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...img
}),
body: { text: caption },
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "🌐 Tonton di Samehadaku",
url: anime.link,
merchant_url: anime.link
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
body: { text: `🍰 *Hasil Pencarian Anime di Samehadaku:* ${text}` },
carouselMessage: { cards: slides }
})
}
}
}, { userJid: m.sender, quoted: m })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat mencari anime di Samehadaku.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['samehadaku']
handler.tags = ['anime']
handler.command = /^(samehadaku)$/i
handler.limit = true
handler.register = true

export default handler