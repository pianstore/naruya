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
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
await global.loading(m, conn)
if (!args[0]) return m.reply(`🍬 *Masukkan teks atas dan bawah untuk meme! (pakai |)*\n\n✨ *Contoh: ${usedPrefix + command} Atas|Bawah*`)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime || !/image\/(jpeg|png)/.test(mime)) return m.reply('🍡 *Balas gambar JPG/PNG yang mau dijadikan meme yaa!*')
let media = await q.download()
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('🍰 *Gagal upload gambar. Ulangi nanti yaa!*')
let [top, bottom] = args.join(" ").split('|')
top = encodeURIComponent(top || '_')
bottom = encodeURIComponent(bottom || '_')
let apiUrl = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${linkUpload}`
let buffer = Buffer.from(await (await fetch(apiUrl)).arrayBuffer())
let stickerImage = await sticker(buffer, false, global.config.stickpack, global.config.stickauth)
await conn.sendFile(m.chat, stickerImage, 'sticker.webp', '', m)
} catch (e) {
console.error(e)
m.reply('🍓 *Yaaah, gagal buat meme stikernya!*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i
handler.premium = true
handler.register = true

export default handler