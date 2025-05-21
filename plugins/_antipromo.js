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

import similarity from 'similarity'

const threshold = 0.85

export async function before(m, { conn, isAdmin, isBotAdmin }) {
if (m.isBaileys || m.fromMe || !m.text) return
let chat = global.db.data.chats[m.chat]
let who = m.mentionedJid && m.mentionedJid.length ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let isMods = [conn.decodeJid(conn.user.id), ...global.config.owner.filter(([num, _, dev]) => num && dev).map(([num]) => num)].map(v => v.replace(/\D/g, '') + '@s.whatsapp.net').includes(who)
let isOwner = m.fromMe || isMods || [conn.decodeJid(conn.user.id), ...global.config.owner.filter(([num]) => num).map(([num]) => num)].map(v => v.replace(/\D/g, '') + '@s.whatsapp.net').includes(who)
if (!chat.antipromosi || isAdmin || isMods || isOwner || !isBotAdmin) return
let text = m.text.toLowerCase()
let score = 0
const keywords = {
'join grup': 3,
'wa.me': 2,
'klik link': 2,
'order': 2,
'panel': 3,
'digital ocean': 3,
'vps': 3,
'buy': 2,
'harga': 2,
'promo': 2,
'diskon': 2,
'akun': 2,
'jual': 3,
'script': 2,
'admin panel': 3,
'gratis': 2,
'reseller': 2,
'suntik': 3,
'dana kaget': 2,
'convert pulsa': 4,
'rate': 2,
'minimal convert': 2,
'contact admin': 2,
'channel informasi': 2,
'pterodactyl': 3,
'nokos': 3,
'sewa bot': 2,
'testimoni': 2
}

for (let key in keywords) {
if (text.includes(key)) {
score += keywords[key]
continue
}
const words = text.split(/\s+/)
for (let word of words) {
if (similarity(word, key) >= threshold) {
score += keywords[key]
break
}
}
}
if (score >= 6) {
try {
await conn.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
await conn.sendMessage(m.chat, {
text: '🔥 *Gak usah promosi disini dek, minimal baca deskripsi!*',
})
} catch (e) {
console.error(e)
}
}
return true
}