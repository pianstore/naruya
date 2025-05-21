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

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let [username, birthday] = text.split('|')
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('*Fotonya mana? Reply gambar atau upload dulu!*')
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Tipe ${mime} tidak didukung!`)
if (!(username && birthday)) return m.reply(`*Masukan format dengan benar!*\n\n*Contoh:*\n${usedPrefix + command} Izumi|18-09-2004`)
await global.loading(m, conn)
let img = await q.download()
let { data } = await uploader(img) 
if (!data.url) return m.reply('Gagal mengunggah gambar!')
let image = global.API('https://some-random-api.com', '/canvas/misc/namecard', { 
avatar: data.url, 
birthday: birthday, 
username: username 
}, false)
await conn.sendFile(m.chat, image, username + '.jpeg', '*Ini dia kak!*', m)
} catch (e) {
console.error(e)
m.reply('Terjadi kesalahan, coba lagi nanti!')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['namecard']
handler.tags = ['genshin']
handler.command = /^(namecard)$/i
handler.register = true
handler.premium = true

export default handler