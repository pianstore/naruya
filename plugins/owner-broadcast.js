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

let handler = async (m, { conn, text }) => {
let cc = text ? m : m.quoted ? await m.getQuotedObj() : m
let teks = text ? text : cc.text
let groups = Object.entries(conn.chats).filter(([jid, chat]) =>
jid.endsWith('@g.us') &&
chat.isChats &&
!chat.metadata?.read_only &&
!chat.metadata?.announce
).map(v => v[0])
if (!cc) return m.reply('🩷 Tidak ada pesan yang bisa dikirim sayang~')
await m.reply(`🦄 *Mengirim broadcast ke ${groups.length} grup...*`)
const name = global.config.author
const imageUrl = 'https://i.supa.codes/cUX91X'
const getBufferFromUrl = async (url) => {
let res = await fetch(url)
let arrayBuffer = Buffer.from(await res.arrayBuffer())
return Buffer.from(arrayBuffer)
}
const jpegThumbnail = await getBufferFromUrl(imageUrl)
const qtoko = {
key: {
fromMe: false,
participant: '12066409886@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
productMessage: {
product: {
productImage: {
mimetype: 'image/jpeg',
jpegThumbnail
},
title: name,
description: null,
currencyCode: 'USD',
priceAmount1000: '1',
retailerId: `© ${name}`,
productImageCount: 1
},
businessOwnerJid: '12066409886@s.whatsapp.net'
}
}
}
for (let id of groups) {
let participants = await conn.groupMetadata(id).then(res => res.participants.map(p => p.id))
let quoted = qtoko
let type = cc.mtype || ''
let content = cc.msg || {}
if (type === 'imageMessage') {
await conn.sendMessage(id, {
image: await cc.download(),
caption: teks
}, { quoted }).catch(_ => _)
} else if (type === 'videoMessage') {
await conn.sendMessage(id, {
video: await cc.download(),
caption: teks
}, { quoted }).catch(_ => _)
} else if (type === 'documentMessage') {
await conn.sendMessage(id, {
document: await cc.download(),
fileName: content.fileName || 'document',
mimetype: content.mimetype || 'application/octet-stream',
caption: teks
}, { quoted }).catch(_ => _)
} else if (type === 'audioMessage') {
let audioBuffer = await cc.download()
let isPTT = content.ptt === true
let mime = content.mimetype || (isPTT ? 'audio/ogg; codecs=opus' : 'audio/mpeg')
await conn.sendMessage(id, {
audio: audioBuffer,
mimetype: mime,
ptt: isPTT,
seconds: content.seconds || 60
}, { quoted }).catch(_ => _)
} else if (type === 'stickerMessage') {
await conn.sendMessage(id, {
sticker: await cc.download()
}, { quoted }).catch(_ => _)
} else if (type === 'contactMessage') {
let vcard = content.vcard
let name = content.displayName || 'Kontak'
let nomor = (vcard.match(/TEL;[^:]*:(\+?\d+)/) || [])[1] || ''
await conn.sendContact(id, [[nomor.replace(/\D/g, ''), name]], quoted).catch(_ => _)
} else if (type === 'locationMessage') {
await conn.sendMessage(id, {
location: {
degreesLatitude: content.degreesLatitude,
degreesLongitude: content.degreesLongitude,
name: content.name || '',
address: content.address || '',
jpegThumbnail
}
}, { quoted }).catch(_ => _)
} else if (type === 'liveLocationMessage') {
await conn.sendMessage(id, {
location: {
degreesLatitude: content.degreesLatitude,
degreesLongitude: content.degreesLongitude,
name: content.name || '',
accuracyInMeters: content.accuracyInMeters || 0,
speedInMps: content.speedInMps || 0,
degreesClockwiseFromMagneticNorth: content.degreesClockwiseFromMagneticNorth || 0,
caption: content.caption || teks,
live: true
}
}, { quoted }).catch(_ => _)
} else {
await conn.sendMessage(id, {
text: teks
}, { quoted }).catch(_ => _)
}
}
await m.reply('🎀 *Broadcast selesai dikirim ke semua grup!*')
}

handler.help = ['broadcast']
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true

export default handler