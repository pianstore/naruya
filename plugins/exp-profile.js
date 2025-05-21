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

import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn }) => {
try {
await global.loading(m, conn)
const d = new Date(new Date + 3600000)
const week = d.toLocaleDateString('id', { weekday: 'long' })
const date = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const who = m.mentionedJid && m.mentionedJid.length ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
const user = global.db.data.users[who]
if (!user) return m.reply('💔 *Pengguna tidak ditemukan di database~*')
const isMods = [conn.decodeJid(conn.user.id), ...global.config.owner.filter(([num, _, dev]) => num && dev).map(([num]) => num)].map(v => v.replace(/\D/g, '') + '@s.whatsapp.net').includes(who)
const isOwner = m.fromMe || isMods || [conn.decodeJid(conn.user.id), ...global.config.owner.filter(([num]) => num).map(([num]) => num)].map(v => v.replace(/\D/g, '') + '@s.whatsapp.net').includes(who)
const isPrems = isOwner || new Date() - user.premiumTime < 0
const pp = await conn.profilePictureUrl(who, 'image').catch(_ => fs.readFileSync('./src/avatar_contact.png'))
const bio = await conn.fetchStatus(who).catch(_ => 'Tidak Ada Bio')
const name = user.registered ? user.name : await conn.getName(who)
const datePacaran = user.pacar ? await dateTime(user.pacaranTime) : null
const caption = `
🌸 *P R O F I L E   U S E R* 🌸
──────────────────────
🧚‍♀️ *Nama: ${name}*
🎀 *Umur: ${user.registered ? user.age : 'Belum diatur'}*
👑 *Status: ${ isMods ? '✨ Developer' : isOwner ? '👑 Owner' : isPrems ? '💎 Premium' : user.level > 999 ? '🔥 Elite' : '👤 Free User' }*
🩷 *Verified: ${user.verif ? 'Ya' : 'Tidak'}*
📝 *Bio: ${bio.status || bio}*
💞 *Pacar: ${user.pacar ? `❤️ @${user.pacar.split('@')[0]} (${datePacaran})` : '💔 Tidak punya'}*
🔗 *Link WA: wa.me/${who.split('@')[0]}*
──────────────────────
🍡 *R P G   I N F O* 🍡
──────────────────────
🗡️ *Level: ${toRupiah(user.level)}*
🎭 *Role: ${user.role}*
✨ *Exp: ${toRupiah(user.exp)}*
🍰 *Uang: ${toRupiah(user.money)}*
🏦 *Bank: ${toRupiah(user.bank || 0)}*
📜 *Terdaftar: ${user.registered ? 'Ya (Sejak ' + await dateTime(user.regTime) + ')' : 'Belum'}*
`.trim()
await conn.sendFile(m.chat, pp, 'pp.jpg', caption, m, false, {
contextInfo: {
mentionedJid: [who, user.pacar].filter(Boolean)
}
})
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['profile', 'profil']
handler.tags = ['xp']
handler.command = /^profile|profil$/i
handler.register = true

export default handler

function dateTime(ts) {
const d = new Date(ts)
return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

const toRupiah = n => parseInt(n || 0).toLocaleString('id-ID')