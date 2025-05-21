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

import { uploader } from '../lib/uploader.js'
import { sticker, fakechat } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted && !text ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let txt = text ? text : q.text
if (!txt) return m.reply(`🍬 *Masukkan teks atau balas pesan teks yaa!*\n\n✨ *Contoh: ${usedPrefix + command} halo*`)
await global.loading(m, conn)
let avatar
try {
avatar = await conn.profilePictureUrl(q.sender, 'image')
} catch {
avatar = await fs.readFile('./src/avatar_contact.png').then(buf => `data:image/png;base64,${buf.toString('base64')}`)
}
if (!/image\/(jpe?g|png)|opus|webp/i.test(mime)) {
let req = await fakechat(txt, q.name || m.pushName || 'User', avatar, false, true)
let stiker = await sticker(false, req, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
let img = await q.download()
let { files } = await uploader(img)
let req = await fakechat(txt, q.name || m.pushName || 'User', avatar, files[0].url, true)
let stiker = await sticker(false, req, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat membuat fakechat!* 🍡')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['fakechat']
handler.tags = ['sticker']
handler.command = /^(fc|qc|fakechat|q)$/i
handler.limit = true
handler.register = true

export default handler