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

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) return m.reply(`Masukan Url!\n\nContoh:\n${usedPrefix + command} https://www.smule.com/recording/lewis-capaldi-someone-you-loved/2027750707_2937753991`)
await global.loading(m, conn)
let response = await fetch(global.API('lol', '/api/smule', { url: text }, 'apikey'))
let { result } = await response.json()
let video = await conn.sendFile(m.chat, result.video, false, result.title, m)
conn.sendFile(m.chat, result.audio, false, false, video, false, { mimetype: 'audio/mpeg' })
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['smule']
handler.tags = ['downloader']
handler.command = /^smule$/i
handler.limit = true
handler.register = true

export default handler