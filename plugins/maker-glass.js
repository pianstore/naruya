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
if (!text) return m.reply(`Masukan Format Dengan Benar!\n\nContoh:\n${usedPrefix + command} Raja Iblis`)
await global.loading(m, conn)
let res = API('lol', '/api/ephoto1/wetglass', { text: text }, 'apikey')
await conn.sendFile(m.chat, res, 'glass.jpg', 'Ini Dia Kak', m, false)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['glass']
handler.tags = ['maker']
handler.command = /^(glass)$/i
handler.premium = true
handler.register = true
export default handler