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
if (!args[0]) return m.reply(`🧁 *Contoh penggunaan: ${usedPrefix + command} Nama Grup Baru*`)
try {
await conn.groupUpdateSubject(m.chat, args.join(' '))
m.reply('🍓 *Nama grup berhasil diganti!*')
} catch (e) {
console.error(e)
m.reply('🍩 *Gagal mengganti nama grup, mungkin karena keterbatasan waktu atau bot bukan admin~*')
}
}

handler.help = ['setnamegc']
handler.tags = ['group']
handler.command = /^(setnamegc)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler