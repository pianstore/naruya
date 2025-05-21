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

let handler = async (m, { conn, text, groupMetadata, usedPrefix, command }) => {
if (!text) return m.reply(`*Contoh Penggunaan :*\n> *${usedPrefix + command} Tolol*`)
let em = ['🥶','🤨','🗿','🤔','😫','🤫','🥴','🤣','😊','😍']
let toM = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let am = em.getRandom()
conn.reply(m.chat, `*Si Paling ${text} Adalah ${toM(a)} ${am}*`, m, { mentions: [a] })
}
handler.help = ['sipaling']
handler.tags = ['fun']
handler.command = /^sipaling$/i
handler.group = true
handler.register = true
export default handler