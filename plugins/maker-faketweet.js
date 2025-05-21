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
const { Tweet } = pkg

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`📝 *Contoh: ${usedPrefix + command} username|Nama Tampilan|Isi tweet*`)
let [username, displayName, ...tweetMsg] = text.split('|')
if (!username || !displayName || !tweetMsg.length) return m.reply(`✍️ Format salah!\n*Contoh:* ${usedPrefix + command} fivesobes|Beş|This is a tweet with #Canvafy`)
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/2f1fd7c3fa620443c1635.jpg')
let tweet = await new Tweet()
.setTheme("dim")
.setUser({ displayName: displayName.trim(), username: username.trim() })
.setVerified(true)
.setComment(tweetMsg.join('|').trim())
.setAvatar(pp)
.build()
await conn.sendFile(m.chat, tweet, 'faketweet.png', '📱 *Fake Tweet berhasil dibuat!*', m)
}

handler.help = ['faketweet']
handler.tags = ['maker']
handler.command = /^faketweet$/i
handler.register = true
handler.limit = true

export default handler