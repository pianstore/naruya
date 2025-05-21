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

let handler = async (m, { conn, text }) => {
let mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!mention) return m.reply(`🍩 *Tag dulu dong orangnyaa~*`)
if (!(mention in global.db.data.users)) return m.reply(`🍰 *User tidak ditemukan di database!*`)
let user = global.db.data.users[mention]
if (!user.banned) return m.reply(`🍬 *Eits, user ini gak kena banned kok!*`)
user.banned = false
user.bannedTime = 0
await m.reply(`🧁 *Yeay! Berhasil unban @${mention.split('@')[0]} dari daftar banned~*`, false, { mentions: [mention] })
conn.reply(mention, `🍧 *Kamu sudah diunban yaa, silakan gunakan bot seperti biasa~*`, null)
}

handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true

export default handler