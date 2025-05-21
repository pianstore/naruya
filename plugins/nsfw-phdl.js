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

let downloadPH = {}

let handler = async (m, { conn, args, command }) => {
if (!args[0]) return m.reply(`🔞 *Masukkan link video Pornhub!*\n\n*Contoh: .${command} https://www.pornhub.com*`)
if (!args[0].includes('pornhub.com')) return m.reply('❌ *Link tidak valid!*')
await global.loading(m, conn)
try {
let url = args[0]
let json = await global.API('lol', '/api/pornhub', { url }, 'apikey')
if (!json || !json.result || !json.result.media) throw '❌ *Gagal mengambil data dari Pornhub.*'
downloadPH[m.sender] = {
url,
thumb: json.result.thumb,
title: json.result.title,
media: json.result.media
}
let list = json.result.media.map((v, i) => [
`.phres ${v.format}`,
(i + 1).toString(),
`🎞️ *${v.format.toUpperCase()}*`
])
await conn.textList(m.chat, `🎬 *${json.result.title}*\n📥 *Pilih resolusi untuk mengunduh:*`, false, list, m, {
contextInfo: {
externalAdReply: {
title: json.result.title,
body: `Durasi: ${json.result.duration}`,
thumbnailUrl: json.result.thumb,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat mengambil data dari Pornhub.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.before = async (m, { conn }) => {
let data = downloadPH[m.sender]
if (!data) return
let q = m.text.trim().toLowerCase()
let found = data.media.find(v => v.format.toLowerCase() === q)
if (!found) return
delete downloadPH[m.sender]
await conn.sendMessage(m.chat, {
video: { url: found.url },
caption: `🎞️ *Berikut video dengan kualitas* ${found.format.toUpperCase()}`
}, { quoted: m })
}

handler.help = ['phdl']
handler.tags = ['nsfw']
handler.command = /^phdl$/i
handler.nsfw = true
handler.premium = true
handler.age = 18
handler.register = true

export default handler