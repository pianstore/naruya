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
if (!m.quoted) return m.reply('*Reply Sticker!*')
if (!m.quoted.fileSha256) return m.reply('*SHA256 Hash Missing*')
let sticker = global.db.data.users[m.sender].sticker
let hash = m.quoted.fileSha256.toString('hex')
if (!(hash in sticker)) return m.reply('*Hash not found in database*')
sticker[hash].locked = !/^un/i.test(command)
m.reply('*Done!*')
} 
handler.help = ['unlockcmd', 'lockcmd']
handler.tags = ['database', 'premium']
handler.command = /^(un)?lockcmd$/i
handler.premium = true
handler.register = true
export default handler
