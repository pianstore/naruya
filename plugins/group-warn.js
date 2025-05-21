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

let handler = async (m, { conn, args }) => {
let mention = m.mentionedJid && m.mentionedJid[0]
let target = mention || m.sender
let user = global.db.data.users[target]
let name = await conn.getName(target)

await m.reply(`🍮 *Cek Warning!*\n\n👤 *User: ${name}*\n⚠️ *Total Warning: ${user.warning}*\n\n🍬 *Ayo tetap sopan dan jaga suasana grup ya~*`, false, { mentions: [target] })
}

handler.help = ['warning']
handler.tags = ['group']
handler.command = /^(warn|warning)$/i
handler.group = true
handler.register = true

export default handler