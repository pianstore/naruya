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

let handler = async (m, { conn, participants, groupMetadata }) => {
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { subject } = groupMetadata
const groupAdmins = participants.filter(p => p.admin)
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
const mentionJids = groupAdmins.map(p => p.id)
let listAdmin = groupAdmins.map((v, i) => `*❁ ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let caption = `
*╭─❁ Daftar Admin Grup ❁*
*│ Grup: ${subject}*
*│*
${listAdmin}
*╰─────────────❁*
`.trim()
await conn.sendMessage(m.chat, {
image: { url: pp },
caption,
mentions: mentionJids
}, { quoted: m })
}

handler.help = ['tagadmin', 'listadmin']
handler.tags = ['group']
handler.command = /^(tagadmin|listadmin)$/i
handler.group = true
handler.owner = true

export default handler