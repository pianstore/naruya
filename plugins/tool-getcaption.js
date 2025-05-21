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
let caption = null
if (!m.quoted) return m.reply('*Reply a message!*')
if (/template/.test(m.quoted.mtype)) caption = m.quoted.mediaMessage[Object.keys(m.quoted.mediaMessage)[0]].caption 
else if (/product/.test(m.quoted.mtype)) caption = m.quoted.product.title + '\n' + m.quoted.product.description
else if (/order/.test(m.quoted.mtype)) caption = m.quoted.message
else caption = m.quoted.text
m.reply(caption, m.chat, { mentions: conn.parseMention(caption) })
}
handler.help = ['getcaption']
handler.tags = ['tools']
handler.command = /^(getcaption)$/i
handler.register = true

export default handler