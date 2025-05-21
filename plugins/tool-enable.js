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

import moment from 'moment-timezone'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin }) => {
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (!isOwner && m.chat.endsWith("@s.whatsapp.net")) return global.dfail('group', m, conn)
const features = [
{ key: 'adminOnly', scope: 'chat', name: 'Admin Only' },
{ key: 'welcome', scope: 'chat', name: 'Welcome' },
{ key: 'detect', scope: 'chat', name: 'Detect' },
{ key: 'otakuNews', scope: 'chat', name: 'Otaku News' },
{ key: 'notifgempa', scope: 'chat', name: 'Notif Gempa' },
{ key: 'antidelete', scope: 'chat', name: 'Anti Delete' },
{ key: 'autoapprove', scope: 'chat', name: 'Auto Approve' },
{ key: 'antiLinks', scope: 'chat', name: 'Anti Link' },
{ key: 'antitagsw', scope: 'chat', name: 'Anti Tag SW' },
{ key: 'antipromosi', scope: 'chat', name: 'Anti Promosi' },
{ key: 'antiSticker', scope: 'chat', name: 'Anti Sticker' },
{ key: 'antiAudio', scope: 'chat', name: 'Anti Audio' },
{ key: 'antiFile', scope: 'chat', name: 'Anti File' },
{ key: 'antiFoto', scope: 'chat', name: 'Anti Foto' },
{ key: 'antiVideo', scope: 'chat', name: 'Anti Video' },
{ key: 'antiToxic', scope: 'chat', name: 'Anti Toxic' },
{ key: 'antiBadword', scope: 'chat', name: 'Anti Badword' },
{ key: 'autoPray', scope: 'chat', name: 'Auto Pray' },
{ key: 'antibot', scope: 'chat', name: 'Anti Bot' },
{ key: 'antiInvite', scope: 'chat', name: 'Anti Invite' },
{ key: 'viewonce', scope: 'chat', name: 'Anti ViewOnce' },
{ key: 'pembatasan', scope: 'chat', name: 'Pembatasan' },
{ key: 'game', scope: 'chat', name: 'Game' },
{ key: 'rpg', scope: 'chat', name: 'RPG' },
{ key: 'nsfw', scope: 'chat', name: 'NSFW' },
{ key: 'teks', scope: 'chat', name: 'Auto Text' },
{ key: 'autolevelup', scope: 'chat', name: 'Auto Level Up' },
{ key: 'autodownload', scope: 'chat', name: 'Auto Download' },
{ key: 'self', scope: 'bot', name: 'Self Mode' },
{ key: 'gconly', scope: 'bot', name: 'Group Only' },
{ key: 'pconly', scope: 'bot', name: 'Private Only' },
{ key: 'swonly', scope: 'bot', name: 'Status Only' },
{ key: 'queque', scope: 'bot', name: 'Antrian Pesan' },
{  key: 'noprint', scope: 'bot', name: 'Log Pesan' },
{ key: 'autoread', scope: 'bot', name: 'Auto Read' },
{ key: 'composing', scope: 'bot', name: 'Typing Mode' },
{ key: 'restrict', scope: 'bot', name: 'Restrict' },
{ key: 'autorestart', scope: 'bot', name: 'Auto Restart' },
{ key: 'backup', scope: 'bot', name: 'Auto Backup' },
{ key: 'cleartmp', scope: 'bot', name: 'Clear Temp' },
{ key: 'anticall', scope: 'bot', name: 'Anti Call' },
{ key: 'adReply', scope: 'bot', name: 'Ad Reply' },
{ key: 'smlcap', scope: 'bot', name: 'SMLCAP' },
{ key: 'noerror', scope: 'bot', name: 'No Error' }
]
if (!args.length) {
let featureStatus = features.map((feature, idx) => {
let status = feature.scope === 'chat' ? chat[feature.key] : bot[feature.key]
return `*${idx + 1}. ${feature.name} ${status ? '[ 🍃 Aktif ]' : '[ 🍂 Nonaktif ]'}*`
}).join('\n')
return conn.sendMessage(m.chat, {
text: `*🔧 Pengaturan Fitur:*\n\n${featureStatus}\n\n💡 *Gunakan perintah: ${usedPrefix + command} [index]*\n*Contoh: ${usedPrefix + command} 1 5 10*`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: "🔧 Pengaturan Bot",
body: global.config.watermark,
thumbnail: fs.readFileSync('./media/thumbnail.jpg'),
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
}
let enabledFeatures = []
for (let arg of args) {
arg = arg.toLowerCase()
let index = parseInt(arg) - 1
let feature = isNaN(index)
? features.find(f => f.key.toLowerCase() === arg)
: features[index]
if (!feature) continue
if (feature.scope === 'chat') {
if (!m.isGroup) return global.dfail('group', m, conn)
if (!(isAdmin || isOwner)) return global.dfail('admin', m, conn)
chat[feature.key] = isEnable
} else if (feature.scope === 'bot') {
if (!isOwner) return global.dfail('owner', m, conn)
bot[feature.key] = isEnable
}
enabledFeatures.push(feature.name)
}
if (!enabledFeatures.length) return m.reply('⚠️ Tidak ada fitur valid yang dipilih.')
await m.reply(`🍃 *Fitur ${enabledFeatures.join(', ')} sudah ${isEnable ? 'diaktifkan' : 'dinonaktifkan'}!*`)
}

handler.help = ['enable', 'disable']
handler.tags = ['tools']
handler.command = /^((en|dis)able|setting|settings|(turn)?o(n|ff)|[01])$/i
handler.register = true
handler.admin = true

export default handler