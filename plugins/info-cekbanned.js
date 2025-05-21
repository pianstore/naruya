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

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let isSender = who == m.sender
if (!user.banned) return m.reply(`🍩 *${isSender ? 'Kamu' : `@${who.split('@')[0]}`} tidak sedang dibanned kok~*`, false, { mentions: [who] })
let now = new Date() * 1
let caption = `
🍓 *Status Banned*

🍬 *User: ${isSender ? 'Kamu' : `@${who.split('@')[0]}*`}
${user.bannedTime == 999 ? '🍯 *Status: Banned Permanen~*' : `🍪 *Sisa Waktu:*
*${msToDate(user.bannedTime - now)}*`}
`.trim()

m.reply(caption, false, { mentions: [who] })
}

handler.help = ['cekbanned']
handler.tags = ['info']
handler.command = /^(cek(banned|ban))$/i
handler.register = true
handler.group = true

export default handler

function msToDate(ms) {
let days = Math.floor(ms / (24 * 60 * 60 * 1000))
let daysms = ms % (24 * 60 * 60 * 1000)
let hours = Math.floor(daysms / (60 * 60 * 1000))
let hoursms = ms % (60 * 60 * 1000)
let minutes = Math.floor(hoursms / (60 * 1000))
return `${days} 🍰 Days\n${hours} 🍵 Hours\n${minutes} 🍫 Minutes`
}