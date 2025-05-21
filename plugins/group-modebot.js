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

let handler = async (m, { conn, text, usedPrefix, command }) => {
let chat = global.db.data.chats[m.chat]
if (m.isGroup) {
switch (text) {
case 'off':
case 'mute':
if (chat.mute) return m.reply('⚠️ *Saya sudah offline sayang~*')
chat.mute = true
conn.reply(m.chat, '🌸 *SUKSES SAYANG... Sekarang bot dalam mode diam!* 🤫', m)
break
case 'on':
case 'unmute':
if (!chat.mute) return m.reply('⚠️ *Saya sudah online sayang~*')
chat.mute = false
conn.reply(m.chat, '🌸 *SUKSES SAYANG... Bot aktif kembali ya!* 💬', m)
break
default: {
m.reply(`❗ *Format salah!*\n\n💡 *Contoh: ${usedPrefix + command} on/off*`)
}
}
} 
}

handler.help = ['botmode']
handler.tags = ['group']
handler.command = /^(bot(mode)?)$/i
handler.group = true
handler.owner = true

export default handler