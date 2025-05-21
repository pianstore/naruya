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

let handler = async (m, { conn, usedPrefix, command }) => {
let store = global.db.data.chats[m.chat].store
let list = Object.values(store)
if (list.length === 0) return m.reply('⚠️ *Belum ada list item di grup ini!*')
list.sort((a, b) => a.command.localeCompare(b.command))
let lists = list.map((v, i) => {
return [v.command, `🍡 ${i + 1}. ${v.command}`, `📦 ${v.command}`]
})
await conn.textList(m.chat, `📜 *Terdapat ${list.length} List*`, false, lists, m)
}
handler.help = ['list']
handler.tags = ['store']
handler.command = /^(list(store)?)$/i
handler.group = true

export default handler