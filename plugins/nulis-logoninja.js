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
let [teks1, teks2] = text.split('|')
if (!teks1 || !teks2) return m.reply(`Masukan Format Dengan Benar!\n\nContoh:\n${usedPrefix + command} Ninja`)
await global.loading(m, conn)
let res = API('lol', '/api/textprome2/ninjalogo', { text1: teks1, text2: teks2 }, 'apikey')
await conn.sendFile(m.chat, res, 'ninja.jpg', 'Sudah Jadi Kak', m, false)
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['logoninja']
handler.tags = ['nulis']
handler.command = /^(logoninja)$/i
handler.register = true
handler.limit = true

export default handler