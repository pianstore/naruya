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

import fs from "fs"
import moment from "moment-timezone"

let handler = async (m, { conn, args, text }) => {
try {
await global.loading(m, conn)
let userJid = m.mentionedJid?.[0] || (text && text.match(/^\d+$/) ? text + "@s.whatsapp.net" : m.sender)
let userNumber = userJid.split('@')[0]
let pp = await conn.profilePictureUrl(userJid, 'image').catch(_ => fs.readFileSync('./src/avatar_contact.png'))
let [cek] = await conn.onWhatsApp(userJid)
if (!cek?.exists) return m.reply(`🍩 *Nomor tidak terdaftar di WhatsApp!*`)
let status = await conn.fetchStatus(userJid).catch(_ => ({ status: 'Tidak tersedia' }))
let bisnis = await conn.getBusinessProfile?.(userJid).catch(_ => null)
let regionData = JSON.parse(fs.readFileSync('./json/region.json', 'utf-8'))
let possibleCodes = [userNumber.slice(0, 3), userNumber.slice(0, 2), userNumber.slice(0, 1)]
let countryCode = possibleCodes.find(code => regionData[code]) || "Tidak diketahui"
let country = regionData[countryCode] || "Tidak diketahui"
let presenceStatus = 'Tidak tersedia'
try {
await conn.presenceSubscribe(userJid)
await new Promise(r => setTimeout(r, 1000))
let presence = conn.presence?.[userJid]?.lastKnownPresence || ''
presenceStatus = presence === 'available' ? 'Online' : presence === 'composing' ? 'Sedang Mengetik...' : 'Offline'
if (presenceStatus === 'Offline') {
const userData = global.db.data.users[userJid] || {}
userData.lastseen = +new Date
global.db.data.users[userJid] = userData
}
} catch (e) {
presenceStatus = 'Tidak bisa dideteksi'
}
await new Promise(r => setTimeout(r, 1000))
const userData = global.db?.data?.users?.[userJid] || {}
const lastSeen = userData.lastseen || 0
let showLastSeen = !presenceStatus.includes('Online')
let lastSeenText = showLastSeen && lastSeen ? formatLastSeen(lastSeen) : '-'
let caption = `🍓 *Profil WhatsApp ditemukan!*
🍭 *Nomor: @${userNumber}*
🧁 *Status: ${status.status || 'Tidak tersedia'}*
🍬 *Kehadiran: ${presenceStatus}*
${showLastSeen ? `🍡 *Terakhir terlihat: ${lastSeenText}*` : ''}
🎌 *Negara: ${country}*
${bisnis?.description ? `🍰 *Bisnis: ${bisnis.description}*` : ''}
${bisnis?.category ? `📦 *Kategori: ${bisnis.category}*` : ''}`.trim()

await conn.sendFile(m.chat, pp, 'profile.jpg', caption, m, null, { mentions: [userJid] })
} catch (e) {
console.error(e)
m.reply("🍩 *Gagal mengambil data profil, mungkin nomornya salah atau disembunyikan~*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['stalkwa']
handler.tags = ['tools']
handler.command = /^(stalkwa|getwa|cekwa)$/i
handler.register = true
handler.limit = true

export default handler

function formatLastSeen(timestamp) {
if (!timestamp) return '-'
moment.locale('id')
return moment(timestamp).tz('Asia/Jakarta').format("dddd, DD MMMM YYYY HH:mm:ss") + " WIB"
}