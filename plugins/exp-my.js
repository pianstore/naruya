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

import fs from "fs"

let handler = async (m, { conn, isMods, isOwner, isPrems, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let status = isMods ? '🎗️ 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 🎗' : isOwner ? 'Owner' : isPrems ? 'Premium User' : user.level > 1000 ? 'Elite User' : 'Free User'
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => fs.readFileSync('./src/avatar_contact.png'))
let caption = `
📌 *Nama: ${user.registered ? user.name : await conn.getName(m.sender)}*
🌟 *Status: ${status}*
`.trim()
await conn.sendFile(m.chat, pp, null, caption, m)
}

handler.help = ["account"]
handler.tags = ["main"]
handler.command = /^(acc(ount)?)$/i
handler.register = true

export default handler

const toRupiah = number => parseInt(number).toLocaleString('id-ID')