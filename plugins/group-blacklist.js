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
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) return m.reply(`🍓 *Reply atau tag orangnya dulu dong sayang~*\n\n*Contoh: ${usedPrefix + command} @${m.sender.split('@')[0]}*`, false, { mentions: [m.sender] })
let chat = global.db.data.chats[m.chat]
chat.member = chat.member || {}
let user = chat.member[who] = chat.member[who] || {}
if (user.blacklist) return m.reply(`🍎 *User @${who.split("@")[0]} sudah ada di daftar blacklist grup ini!*`, false, { mentions: [who] })
user.blacklist = true
user.blacklistTime = new Date() * 1
m.reply(`🍩 *Berhasil~*\n*@${who.split("@")[0]} telah dimasukkan ke dalam blacklist grup ini!*\n\n🍰 *Dia tidak akan bisa menggunakan bot selama status blacklist masih aktif*.`, false, { mentions: [who] })

}

handler.help = ['blacklist']
handler.tags = ['group']
handler.command = /^(blacklist(user)?)$/i
handler.group = true
handler.owner = true

export default handler