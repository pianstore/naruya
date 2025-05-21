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

import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, __dirname, args, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted: m
let mime = (q.msg || q).mimetype || ''
if (!/audio/.test(mime)) return m.reply(`Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`)
if (!args[0] || !args[1]) return m.reply(`example: ${usedPrefix + command} 00:00:30 00:00:30`)
await global.loading(m, conn)
let ran = '.mp3'
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${filename}`, async (err) => {
await unlinkSync(media)
if (err) return m.reply(`_*Error!*_`)
let buff = await readFileSync(filename)
await conn.sendFile(m.chat, buff, ran, null, m, false, {
mimetype: 'audio/mpeg'
})
})
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['cutaudio']
handler.tags = ['audio']
handler.command = /^(potong(audio|mp3)|cut(audio|mp3))$/i
handler.register = true

export default handler