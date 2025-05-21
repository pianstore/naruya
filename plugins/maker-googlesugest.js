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

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
let teks = args.join(' ').split('|')
if (!teks[0] || !teks[1] || !teks[2]) return m.reply(`Masukan Text Nya!\n\nContoh:\n${usedPrefix + command} Teks 1|Teks 2|Teks 3`)
await global.loading(m, conn)
let res = API('lol', '/api/gsuggest', { text1: teks[0], text2: teks[1], text3: teks[2] }, 'apikey')
await conn.sendFile(m.chat, res, 'error.jpg', 'Ini Dia Kak', m, false)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['googlesugest']
handler.tags = ['maker']
handler.command = /^(googlesugest)$/i
handler.premium = true
handler.register = true
export default handler