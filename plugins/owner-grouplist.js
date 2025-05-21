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

let handler = async (m, { conn, participants }) => {
let now = new Date() * 1
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce && !chat.isCommunity && !chat.isCommunityAnnounce && !chat?.metadata?.isCommunity && !chat?.metadata?.isCommunityAnnounce).map(v => v[0])
let txt = ''
let chats = global.db.data.chats
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.isCommunity && !chat.isCommunityAnnounce && !chat?.metadata?.isCommunity && !chat?.metadata?.isCommunityAnnounce))
txt += `🍡 *${await conn.getName(jid)}*\n🍬 *${jid} [${chat?.metadata?.read_only ? 'Keluar' : 'Masuk'}]*\n🍰 ${chats[jid] == undefined ? chats[jid] = { isBanned: false, welcome: false, antiLink: false, delete: true } : chats[jid].expired ? msToDate(chats[jid].expired - now): '*⏳ Tidak Diatur Expired Group*'}\n` +
`*${chats[jid].isBanned ? '🍏' : '🍎'} Group Banned*\n` +
`*${chats[jid].welcome ? '🍏' : '🍎'} Auto Welcome*\n` +
`*${chats[jid].antiLink ? '🍏' : '🍎'} Anti Link*\n\n`
m.reply(`🎀 *List Semua Grup Aktif*\n🍓 *Total Grup: ${groups.length}*\n\n${txt}`.trim())
}

handler.help = ['grouplist']
handler.tags = ['group']
handler.command = /^(group(s|list)|(s|list)group)$/i
handler.owner = true

export default handler

function msToDate(ms) {
let days = Math.floor(ms / (24 * 60 * 60 * 1000))
let daysms = ms % (24 * 60 * 60 * 1000)
let hours = Math.floor(daysms / (60 * 60 * 1000))
let hoursms = ms % (60 * 60 * 1000)
let minutes = Math.floor(hoursms / (60 * 1000))
return `*${days} Hari* 🍡\n*${hours} Jam* 🍬\n*${minutes} Menit* 🍰`
}