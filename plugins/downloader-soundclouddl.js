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

let handler = async (m, { conn, args }) => {
if (!args[0] || !args[0].includes('soundcloud.com'))
return m.reply('🔗 Berikan link SoundCloud yang valid!')
await global.loading(m, conn)
try {
let res = await fetch(`https://api.nekorinn.my.id/downloader/soundcloud?url=${args[0]}`)
let json = await res.json()
if (!json.status || !json.result) return m.reply("❌ Gagal mengunduh lagu.")
let { title, thumbnailUrl, downloadUrl } = json.result
await conn.sendMessage(m.chat, {
audio: { url: downloadUrl },
mimetype: "audio/mpeg",
ptt: true,
fileName: `${title}.mp3`,
contextInfo: {
externalAdReply: {
title,
body: "SoundCloud Music",
thumbnailUrl,
mediaUrl: args[0],
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply("❌ Terjadi kesalahan saat mengunduh lagu SoundCloud.")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['soundclouddl']
handler.tags = ['downloader']
handler.command = /^(soundclouddl|scdl)$/i
handler.register = true
handler.limit = true

export default handler