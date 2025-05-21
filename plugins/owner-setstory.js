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
import path from 'path'

let handler = async (m, { conn, args, text }) => {
let quoted = m.quoted || m
let mime = quoted.mimetype || ''
let mediaType = mime.split('/')[0]
let fileExt = mime.split('/')[1] || 'bin'
let caption = text || quoted.text || ''
if (!quoted.mimetype && !m.hasMedia) {
await conn.sendMessage('status@broadcast', { text: caption })
return m.reply('*Teks berhasil dikirim ke status WhatsApp!*')
}
let media = await quoted.download()
let filePath = path.join('./tmp', `status_${Date.now()}.${fileExt}`)
await fs.promises.writeFile(filePath, media)
if (/image/.test(mime)) {
await conn.sendMessage('status@broadcast', { image: fs.readFileSync(filePath), caption })
} else if (/video/.test(mime)) {
await conn.sendMessage('status@broadcast', { video: fs.readFileSync(filePath), caption })
} else if (/audio/.test(mime)) {
await conn.sendMessage('status@broadcast', { audio: fs.readFileSync(filePath), mimetype: 'audio/mpeg' })
} else if (/document/.test(mime)) {
await conn.sendMessage('status@broadcast', { document: fs.readFileSync(filePath), fileName: path.basename(filePath) })
} else {
await conn.sendMessage('status@broadcast', { document: fs.readFileSync(filePath), fileName: path.basename(filePath) })
}
m.reply('*Berhasil mengirim status ke WhatsApp!*')
}

handler.help = ['setstory']
handler.tags = ['owner']
handler.command = /^(setstory|setsw)$/i
handler.mods = true

export default handler