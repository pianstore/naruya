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
let { sWelcome, sBye, sPromote, sDemote } = global.db.data.chats[m.chat]
let groupAdmins = participants.filter(p => p.admin)
let listAdmin = groupAdmins.map((v, i) => `🍩 ${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `🎀 *Info Grup Saat Ini* 🎀

🍡 *ID Grup:* 
*${groupMetadata.id}*

🍰 *Nama Grup:* 
*${groupMetadata.subject}*

🍬 *Deskripsi:* 
${groupMetadata.desc?.toString() || '*Belum ada deskripsi~*'}

🍓 *Jumlah Member:* 
*${participants.length} orang*

🍮 *Pemilik Grup:* 
*@${owner.split('@')[0]}*

🧁 *Admin Grup:*
*${listAdmin}*

🧸 *Pesan Otomatis:*
🎉 *Welcome:* ${sWelcome}
👋 *Bye:* ${sBye}
✨ *Promote:* ${sPromote}
🔻 *Demote:* ${sDemote}
`
await conn.sendFile(m.chat, pp, null, text.trim(), m, null, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i
handler.group = true
handler.admin = true

export default handler