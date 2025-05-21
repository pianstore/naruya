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

import pkg from 'baileys'
import fs from 'fs'
import canvafy from 'canvafy'

const { areJidsSameUser } = pkg
const leaderboards = [
'atm','level','exp','money','iron','gold','diamond','emerald','trash','potion','wood','rock','string','umpan','petfood',
'common','uncommon','mythic','legendary','pet','bank','chip','skata','donasi','deposit','garam','minyak','gandum','steak',
'ayam_goreng','ribs','roti','udang_goreng','bacon'
]

leaderboards.sort((a, b) => a.localeCompare(b))
let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
let users = Object.entries(global.db.data.users).map(([jid, user]) => ({ ...user, jid }))
let leaderboard = leaderboards.filter(v => users.some(u => u[v]))
let type = (args[0] || '').toLowerCase()
if (!leaderboard.includes(type)) {
let teks = `🌸 *Daftar Leaderboard:*\n\n${leaderboard.map(v => `*• ${global.rpg.emoticon(v)} ${v}*`).join('\n')}\n\n✨ *Contoh: ${usedPrefix + command} legendary*`
return conn.reply(m.chat, teks.trim(), m)
}
let sorted = users.map(toNumber(type)).sort(sort(type))
let userItem = sorted.map(u => u.jid)
let pp = jid => conn.profilePictureUrl(jid, 'image').catch(_ => fs.readFileSync('./src/avatar_contact.png'))
let dataUser = await Promise.all(
sorted.slice(0, 10).map(async (u, i) => ({
top: i + 1,
avatar: await pp(u.jid),
tag: u.registered ? normalizeName(u.name) : normalizeName(conn.getName(u.jid)),
score: Number.isFinite(parseInt(u[type])) ? Math.min(parseInt(u[type]), Number.MAX_SAFE_INTEGER) : 0
}))
)
let image = await topRank(type, "https://i.supa.codes/mwaTRH", dataUser)
let text = `🏆 *${type.toUpperCase()} Leaderboard*

✨ *Rank Kamu: ${toRupiah(userItem.indexOf(m.sender) + 1)} dari ${toRupiah(userItem.length)} pemain*
────────────────────────────
${sorted.slice(0, 5).map((u, i) => {
let nama = participants.some(p => areJidsSameUser(u.jid, p.id)) ? (u.registered ? u.name : conn.getName(u.jid)) : 'pengguna lain'
let icon = ['👑','💖','🎀','🌸','🧸'][i]
let emoji = ['🌟','💫','🍬','🍓','🦄'][i]
return `*${icon} Peringkat [ ${i + 1} ]*
*ᰔᩚ Nama : ${nama}*
${emoji} *Level : ${toRupiah(u[type])}*
🔗 *Link : wa.me/${u.jid.split('@')[0]}*
────────────────────────────`
}).join('\n')}`
await conn.sendFile(m.chat, image, '', text.trim(), m, { contextInfo: { mentionedJid: conn.parseMention(text) } })

}

handler.help = ['leaderboard']
handler.tags = ['rpg']
handler.command = /^leaderboard|lb$/i
handler.owner = true

export default handler

function normalizeName(name) {
return name.normalize("NFKD").replace(/[^\x00-\x7F]/g, "")
}

function sort(property, ascending = true) {
return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
}

function toNumber(property, _default = 0) {
return (a, i, b) => ({ ...b[i], [property]: a[property] === undefined ? _default : a[property] })
}

function toRupiah(number) {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}

async function topRank(title, img, data) {
return await new canvafy.Top()
.setOpacity(0.7)
.setScoreMessage(capitalize(title) + ":")
.setabbreviateNumber(true)
.setBackground("image", img)
.setColors({
box: '#000000',
username: '#FFFFFF',
score: '#FFFFFF',
firstRank: '#F7C716',
secondRank: '#9E9E9E',
thirdRank: '#94610F'
})
.setUsersData(data)
.build()
}