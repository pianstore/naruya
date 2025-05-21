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

let handler = async (m, { conn, text, groupMetadata }) => {
var lama = 86400000 * 7
const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
const milliseconds = new Date(now).getTime()
let member = groupMetadata.participants.map(v => v.id)
let pesan = text ? text : '🍡 *Hai semua~*\n*Mohon aktif ya di grup, karena sewaktu-waktu akan ada pembersihan member yang cuma nyimak~*'
let total = 0
let sider = []
for (let i = 0; i < member.length; i++) {
let id = member[i]
let userData = global.db.data.users[id]
let isAdmin = groupMetadata.participants.find(u => u.id === id)?.admin
if ((!userData || milliseconds - userData.lastseen > lama) && !isAdmin) {
if (!userData?.banned) {
total++
sider.push(id)
}
}
}
if (total === 0) return conn.reply(m.chat, '🍩 *Tidak ditemukan member nyimak (sider) dalam 7 hari terakhir~*', m)
let list = sider.map(v => {
let user = global.db.data.users[v]
let last = user ? msToDate(milliseconds - user.lastseen) : 'Tidak Terdeteksi'
return `🍓 *@${v.split('@')[0]} — ${last}*`
}).join('\n')
let teks = `🎀 *Deteksi Sider (Pasif 7+ Hari)* 🎀

🍰 *Total: ${total}/${member.length} member terdeteksi tidak aktif*
🍬 *Alasan:*
*1. Tidak aktif lebih dari 7 hari*
*2. Hanya membaca, tidak pernah chat*

📢 *Pesan:*
${pesan}

🍡 *List Sider:*
${readMore}
${list}
`
conn.reply(m.chat, teks.trim(), m, {
contextInfo: {
mentionedJid: sider
}
})
}

handler.help = ['gcsider']
handler.tags = ['group']
handler.command = /^(sider)$/i
handler.group = true
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function msToDate(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
if (d === 0 && h === 0 && m === 0) return 'Baru Saja'
return `${d} Hari ${h} Jam`
}