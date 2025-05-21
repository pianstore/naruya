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

import { topManga } from '../lib/scrape.js'
const type = [ 'manga', 'oneshots', 'doujin', 'lightnovels', 'novels', 'manhwa', 'manhua', 'bypopularity', 'favorite' ]
let handler = async(m, { conn, text }) => {
let input = (text || '').toLowerCase()
if (input && !type.includes(input)) return m.reply(`Jenis Jenis Komik : \n ${type.map(v => { return `• ${v}` }).join('\n')}`)
let manga = await topManga(input)
let caption = manga.map(v => {
return `
_*${v.rank}. ${v.title}*_
*• Rating : ${v.rating}*
• ${v.info}
`.trim()
}).join('\n\n')
m.reply('_*Top Manga Menurut MyAnimeList*_\n\n' + caption)
}
handler.help = ['topmanga']
handler.tags = ['anime']
handler.command = /^(topmanga)$/i
handler.register = true

export default handler