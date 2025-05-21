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

let handler = async (m, { conn }) => {
const chatID = m.chat
try {
const groupData = await conn.groupMetadata(chatID)
const groupName = groupData.subject || "Grup Ini"
const membersInfo = []
const regionData = JSON.parse(fs.readFileSync('./json/region.json', 'utf-8'))
for (const member of groupData.participants) {
if (!member.id.includes('@s.whatsapp.net')) continue
const userJid = member.id
const userNumber = userJid.split('@')[0]
const userData = global.db.data.users[userJid]
const lastSeen = userData?.lastseen || 0
const isOnline = (Date.now() - lastSeen) < 3600000
const status = isOnline ? '🟢 Online' : '🔴 Offline'
const possibleCodes = [userNumber.slice(0, 3), userNumber.slice(0, 2), userNumber.slice(0, 1)]
const countryCode = possibleCodes.find(code => regionData[code]) || "Tidak diketahui"
const country = regionData[countryCode] || "Tidak diketahui"
membersInfo.push(`🫧 *${await conn.getName(userJid)}*\n📡 *Status: ${status}*\n🌍 *Negara: ${country}*\n🔗 *wa.me/${userNumber}*`)
}
if (membersInfo.length > 0) {
const listText = membersInfo.join('\n\n')
m.reply(`📢 *Daftar Anggota Grup:*\n*${groupName}*\n\n${listText}`)
} else {
m.reply(`🚫 *Tidak ada anggota dalam grup ini.*`)
}
} catch (error) {
console.error(error)
m.reply("❌ *Gagal mengambil daftar anggota!*")
}
}

handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(listonline)$/i
handler.owner = true
handler.group = true

export default handler