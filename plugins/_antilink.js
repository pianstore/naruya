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

const linkRegex = /\b(?:https?:\/\/|www\.)\S+\.\S+/gi

export async function before(m, { isAdmin, isBotAdmin, isMods }) {
const isOwner = global.config.owner.some(([number]) => m.sender.includes(number))
if (m.isBaileys || m.fromMe || isOwner || isAdmin || isMods) return true
let chat = global.db.data.chats[m.chat]
if (!chat.antiLinks || !m.isGroup) return
if (typeof m.text === 'string' && linkRegex.test(m.text)) {
 await this.sendMessage(m.chat, { delete: m.key })
}
return true
}