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

let handler = async (m, { conn, text, command, usedPrefix }) => {
let store = global.db.data.chats[m.chat].store
if (!text || !text.includes('|')) return m.reply(`❌ *Format salah!*\n\n*Contoh: ${usedPrefix + command} vps|75000*`)
let [cmd, harga] = text.split('|').map(v => v.trim())
if (!cmd || !harga) return m.reply(`❌ *Format wajib: nama|harga*`)
if (isNaN(harga)) return m.reply(`💰 *Harga harus berupa angka!*`)
if (store[cmd]) return m.reply(`⚠️ *Command '${cmd}' sudah ada!*`)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let mediaUrl = false
if (mime) {
try {
let media = await q.download()
mediaUrl = await uploader(media)
} catch {
return m.reply(`⚠️ *Gagal mengunggah media!*`)
}
}
store[cmd] = {
command: cmd,
harga: parseInt(harga),
media: mediaUrl
}
m.reply(`🍓 *Item berhasil ditambahkan ke Store!* 🍓

🧺 *Nama: ${cmd}*
💸 *Harga: Rp ${toRupiah(harga)}*
${mediaUrl ? '🖼️ *Media: Tersimpan*' : '—'}
`)
}

handler.help = ['addlist']
handler.tags = ['store']
handler.command = /^(add(store|list))$/i
handler.group = true
handler.admin = true

export default handler

function toRupiah(number) {
return parseInt(number).toLocaleString('id-ID')
}