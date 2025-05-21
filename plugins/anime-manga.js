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

import { manga } from '../lib/scrape.js'

let handler = async(m, { conn, text, usedPrefix, command }) => {
try {
if (!text) return m.reply(`*Masukan Nama Manga!* \n\n> *Contoh : \n${usedPrefix + command} Majo No Tabitabi*`)
await global.loading(m, conn)
let data = await manga(text)
let caption = `
*Title : ${data.title}*

*Synopsis :* ${data.synopsis}

${data.info.filter(v => v.type != 'Genres').map(v => {
return `${v.type} : ${v.result}`.trim()
}).join('\n')}

*Related :*
${data.related.map(v => {
return `• ${v.name} ( ${v.type.replace(':', '')} )`.trim()
}).join('\n')}
`.trim()
conn.sendFile(m.chat, data.image, false, caption, m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['mangainfo']
handler.tags = ['anime']
handler.command = /^(manga(info)?)$/i
handler.premium = true
handler.register = true
export default handler