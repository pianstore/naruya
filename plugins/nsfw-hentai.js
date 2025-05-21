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

let handler = async (m, { conn }) => {
try {
let url = 'https://api.hiuraa.my.id/random/hentai'
await conn.sendFile(m.chat, url, 'hentai.jpg', '🌸 *Nih gambarnya, mesum ya Kak~* 🩵', m)
} catch (e) {
throw '❌ *Gagal ambil gambar, coba lagi nanti ya sayang~*'
}
}

handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
handler.nsfw = true
handler.premium = true
handler.register = true
handler.age = 18

export default handler