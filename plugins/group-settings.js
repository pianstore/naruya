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

let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = {
'open': 'not_announcement',
'close': 'announcement',
}[(args[0] || '').toLowerCase()]
if (isClose === undefined)
return m.reply(`🍰 *Format salah, sayang~*\n\n*Gunakan salah satu dari ini:*\n\n🍓 *${usedPrefix + command} open (Buka grup)*\n🍓 *${usedPrefix + command} close (Tutup grup)*`.trim())
await conn.groupSettingUpdate(m.chat, isClose)
m.reply(`🍬 *Berhasil! Grup sekarang telah ${args[0] === 'open' ? 'dibuka' : 'ditutup'}~*`)
}

handler.help = ['group <open|close>']
handler.tags = ['group']
handler.command = /^(g|group)$/i
handler.group = true
handler.owner = true
handler.botAdmin = true

export default handler