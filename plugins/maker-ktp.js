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

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime && args[0] !== '?') return m.reply('🌸 Fotonya Mana?')
if (!/image\/(jpe?g|png)/.test(mime) && args[0] !== '?') return m.reply(`🌼 *Mime ${mime} tidak didukung!*`)
await global.loading(m, conn)
if (args[0] == '?') {
let ppuser = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
return await conn.sendFile(m.chat, ppuser, '', `💮 Silahkan isi nomor foto di atas dengan data yang sesuai\n\n🌷 *Contoh:*\n${usedPrefix + command} 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15`, m)
}
let img = await q.download()
let linkUpload = await uploader(img).catch(() => null)
if (!linkUpload) return m.reply('❌ *Gagal mengunggah gambar. Coba lagi nanti!*')

let response = args.join(' ').split('|')
let ktp = global.API('lol', '/api/ktpmaker', {
nik: response[0] || 1,
prov: response[1] || 2,
kabu: response[2] || 3,
name: response[3] || 4,
ttl: response[4] || 5,
jk: response[5] || 6,
jl: response[6] || 7,
rtrw: response[7] || 8,
lurah: response[8] || 9,
camat: response[9] || 10,
agama: response[10] || 11,
nikah: response[11] || 12,
kerja: response[12] || 13,
warga: response[13] || 14,
until: response[14] || 15,
img: linkUpload
}, 'apikey')
await conn.sendFile(m.chat, ktp, 'ktp.jpg', `🌹 Jika tidak mengerti cara penggunaan, ketik *${usedPrefix + command} ?*`, m, false)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['ktp']
handler.tags = ['maker', 'premium']
handler.command = /^(ktp)$/i
handler.premium = true
handler.register = true

export default handler