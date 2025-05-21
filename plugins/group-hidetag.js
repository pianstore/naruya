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
import { tmpdir } from 'os'

let handler = async (m, { conn, args, text, participants }) => {
let q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
let users = participants.map(p => p.id)
let teks = text || q.text || ''
if (mime) {
let ext = mime.split('/')[1]
let filePath = path.join('./tmp', `${Date.now()}.${ext}`)
let media = await q.download()
fs.writeFileSync(filePath, media)
let sendOpt = {
mentions: users,
quoted: m
}
if (/image/.test(mime)) {
await conn.sendMessage(m.chat, { image: fs.readFileSync(filePath), caption: teks, ...sendOpt }, { ephemeralExpiration: 0 })
} else if (/video/.test(mime)) {
await conn.sendMessage(m.chat, { video: fs.readFileSync(filePath), caption: teks, ...sendOpt }, { ephemeralExpiration: 0 })
} else if (/audio/.test(mime)) {
await conn.sendMessage(m.chat, { audio: fs.readFileSync(filePath), mimetype: 'audio/mp4', ptt: true, ...sendOpt }, { ephemeralExpiration: 0 })
} else if (/document/.test(mime)) {
await conn.sendMessage(m.chat, { document: fs.readFileSync(filePath), mimetype: mime, fileName: `file.${ext}`, ...sendOpt }, { ephemeralExpiration: 0 })
}
fs.unlinkSync(filePath)
} else if (teks) {
await conn.sendMessage(m.chat, { text: teks, mentions: users }, { quoted: m })
} else {
m.reply('⚠️ *Kirim media atau teks, atau balas pesan.*')
}
}

handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(hidetag|ht|h)$/i
handler.group = true
handler.admin = true

export default handler