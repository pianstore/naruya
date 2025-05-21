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

export async function before(m, { isAdmin, isBotAdmin, isMods }) {
if (!m.messageStubType || m.messageStubType !== 27) return
if (!m.messageStubParameters || !Array.isArray(m.messageStubParameters)) return
let botAdded = m.messageStubParameters[0]
let isBot = /^BAE[5-9]/.test(m.key.id)
let chat = global.db.data.chats[m.chat] || {}
const isOwner = global.config.owner.some(([num]) => m.sender.includes(num))
if (chat.antibot && isBot) {
if (!isBotAdmin || isAdmin || isMods || isOwner) return
await this.groupParticipantsUpdate(m.chat, [botAdded], 'remove').catch(() => {})
await this.sendMessage(m.chat, {
text: `⚠️ Bot terdeteksi dan telah dikeluarkan dari grup ini.`,
}, { quoted: m })
return true
}

return true
}