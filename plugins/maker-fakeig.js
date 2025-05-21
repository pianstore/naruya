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

import pkg from 'canvafy'
const { Instagram } = pkg

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`📸 *Contoh: ${usedPrefix + command} naruyaizumi_ (kirim gambarnya juga sayang~)*`)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image/.test(mime)) return m.reply('🖼️ Kirim atau reply gambar yang mau dipost ya!')
let media = await q.download()
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/2f1fd7c3fa620443c1635.jpg')
let instagram = await new Instagram()
.setTheme("dark")
.setUser({ username: text.trim() })
.setLike({ count: Math.floor(Math.random() * 4000 + 300), likeText: "likes" })
.setVerified(true)
.setStory(true)
.setPostDate(Date.now())
.setAvatar(pp)
.setPostImage(media)
.setLiked(true)
.setSaved(true)
.build()
await conn.sendFile(m.chat, instagram, `fakeig-${text}.png`, `📸 *Fake Instagram post berhasil dibuat!*`, m)
}

handler.help = ['fakeig']
handler.tags = ['maker']
handler.command = /^(fakeig)$/i
handler.register = true
handler.limit = true

export default handler