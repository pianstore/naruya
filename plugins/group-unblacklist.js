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

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] 
: m.quoted ? m.quoted.sender 
: text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
: false
if (!who) return m.reply(`🍓 *Tag atau reply orangnya dulu dong~*\n\n*Contoh: ${usedPrefix + command} @${m.sender.split('@')[0]}*`, false, { mentions: [m.sender] })
let chat = global.db.data.chats[m.chat]
chat.member = chat.member || {}
let user = chat.member[who] = chat.member[who] || {}
if (!user.blacklist) return m.reply(`🍎 *@${who.split("@")[0]} tidak sedang dalam blacklist kok~*`, false, { mentions: [who] })
user.blacklist = false
user.blacklistTime = 0
m.reply(`🍩 *Berhasil~*\n*@${who.split("@")[0]} sekarang sudah dikeluarkan dari daftar blacklist grup ini~*\n*Yay! Dia bisa pakai bot lagi!*`, false, { mentions: [who] })
}

handler.help = ['unblacklist']
handler.tags = ['group']
handler.command = /^(unblacklist(user)?)$/i
handler.group = true
handler.owner = true

export default handler