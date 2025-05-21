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

export async function before(m, { conn, isBotAdmin, isAdmin, isMods }) {
if (m.isBaileys || m.fromMe) return true
let sender = m.sender
const isOwner = global.config.owner.some(([number]) => sender.includes(number))
let isPrivate = !m.isGroup
if (isPrivate) {
let isInviteLink = typeof m.text === 'string' && /chat\.whatsapp\.com\/[0-9A-Za-z]{20,24}/i.test(m.text)
let isInviteMessage = m.mtype === 'groupInviteMessage'
if ((isInviteLink || isInviteMessage) && !isOwner && !isAdmin && !isMods) {
await conn.sendMessage(m.chat, {
text: `⛔ *Kamu tidak diizinkan mengirim link grup ke bot!*`,
mentions: [sender]
}, { quoted: m })
await conn.updateBlockStatus(sender, 'block')
}
}
return true
}