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

let handler = async (m, { conn }) => {
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let now = new Date() * 1
let chatList = await Promise.all(chats.map(async ([jid], i) => {
let name = await conn.getName(jid).catch(_ => 'Unknown')
let waktu = now - global.db.data.chats[jid].isBannedTime < 0
? msToDate(global.db.data.chats[jid].isBannedTime - now)
: 'Banned Permanen'
return `*│ ${i + 1}. ${name}*\n*│ ${jid}*\n*│ 🍰 ${waktu}*`
}))
let userList = await Promise.all(users.map(async ([jid], i) => {
let name
try {
name = await conn.getName(jid)
} catch {
name = 'Unknown'
}
let waktu = now - global.db.data.users[jid].bannedTime < 0
? msToDate(global.db.data.users[jid].bannedTime - now)
: 'Banned Permanen'
return `*│ ${i + 1}. ${name}*\n*│ ${jid}*\n*│ 🍰 ${waktu}*`
}))
let teks = `
🍩 *DAFTAR BAN STATUS* 🍩

*┌🥯 Chat Terbanned*
*│ 🍬 Total: ${chats.length} Chat*
${chatList.length ? chatList.join('\n│\n') : '*│ 🍡 Tidak ada chat yang terbanned~*'}
*└────*

*┌🧁 User Terbanned*
*│ 🍬 Total: ${users.length} User*
${userList.length ? userList.join('\n│\n') : '*│ 🍡 Tidak ada user yang terbanned~*'}
*└────*
`.trim()

m.reply(teks)
}

handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.owner = true

export default handler

function msToDate(ms) {
let days = Math.floor(ms / (24 * 60 * 60 * 1000))
let daysms = ms % (24 * 60 * 60 * 1000)
let hours = Math.floor(daysms / (60 * 60 * 1000))
let hoursms = ms % (60 * 60 * 1000)
let minutes = Math.floor(hoursms / (60 * 1000))
return `${days} 🍪 Days ${hours} 🍭 Hours ${minutes} 🍫 Minutes`
}