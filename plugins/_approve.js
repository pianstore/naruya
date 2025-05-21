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

export async function before(m, { conn }) {
if (!m.isGroup || m.isBaileys || !m.messageStubType) return
if (m.messageStubType === 21) {
let chat = global.db.data.chats[m.chat]
if (!chat?.autoapprove) return
let metadata = await conn.groupMetadata(m.chat)
let botId = conn.user.jid
let isBotAdmin = metadata.participants.find(p => p.id === botId)?.admin
if (!isBotAdmin) return
let participants = m.messageStubParameters || []
if (!participants.length) return
try {
await conn.groupRequestParticipantsUpdate(m.chat, participants, 'approve')
console.log(`[AUTO-APPROVE] Disetujui: ${participants}`)
} catch (e) {
console.error('[ERROR autoapprove]', e)
}
}
return true
}