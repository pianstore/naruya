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

let handler = async (m, { conn, text }) => {
if (!text) return m.reply('🧁 Masukkan judul lagu Spotify!')
await global.loading(m, conn)
try {
let res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${text}`)
let json = await res.json()
if (!json.status || !json.result) return m.reply("🍩 Gagal mengambil data lagu!")
let { title, artist, duration, imageUrl, link } = json.result.metadata
let { downloadUrl } = json.result
await conn.sendMessage('120363417411850319@newsletter', {
audio: { url: downloadUrl },
mimetype: "audio/mpeg",
ptt: true,
fileName: `${title}.mp3`,
contextInfo: {
externalAdReply: {
title: title,
body: `${artist} | ⏱️ ${duration}`,
thumbnailUrl: imageUrl,
mediaUrl: link,
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
} catch (e) {
console.error(e)
m.reply("🍩 *Terjadi kesalahan saat memutar lagu Spotify!*")
}
await global.loading(m, conn, true)
}

handler.help = ['spotifych']
handler.tags = ['sound']
handler.command = /^(spotifych)$/i
handler.limit = true
handler.register = true

export default handler