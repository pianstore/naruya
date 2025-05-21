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
let api = await global.API('btz', '/api/news/daily', {}, 'apikey')
if (!api.result || !Array.isArray(api.result)) throw 'Data tidak tersedia'
let res = api.result.slice(0, 10)
let caption = res.map(v => {
return `
🍩 *${v.berita.trim()}*
📖 Baca di: ${v.berita_url}
`.trim()
}).join('\n\n')
conn.adReply(m.chat, caption, '📰 Rangkuman Berita Hari Ini', '', res[0].berita_thumb, res[0].berita_url, m)
} catch (e) {
m.reply('🍰 *Upss, gagal mengambil berita harian sayang~!*\nSilakan coba lagi nanti yaa~')
}
}

handler.help = ['dailynews']
handler.tags = ['news']
handler.command = /^(dailynews)$/i
handler.register = true

export default handler