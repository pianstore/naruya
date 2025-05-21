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

let handler = async (m, { conn, participants, args }) => {
const botNumber = conn.user.jid
const admins = participants.filter(p => p.admin && p.id !== botNumber)
for (const admin of admins) {
await conn.groupParticipantsUpdate(m.chat, [admin.id], 'demote').catch(() => {})
await conn.groupParticipantsUpdate(m.chat, [admin.id], 'remove').catch(() => {})
}
await conn.groupRevokeInvite(m.chat).catch(() => {})
let imageUrl = args[0] || 'https://i.imgur.com/JO2xFjA.jpeg'
await conn.updateProfilePicture(m.chat, { url: imageUrl }).catch(() => {})
await conn.groupUpdateSubject(m.chat, '☠️ 𝐊𝐔𝐃𝐄𝐓𝐀 🪓').catch(() => {})
m.reply('🔥 *Kudeta Berhasil!*')
}

handler.help = ['kudeta']
handler.tags = ['group']
handler.command = /^kudeta$/i
handler.owner = true

export default handler