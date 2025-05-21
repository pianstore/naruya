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
if (!m.quoted) return m.reply(`*Balas stiker dengan perintah ${usedPrefix + command}*`)
if (!m.quoted.fileSha256) return m.reply('*SHA256 Hash Missing*')
if (!text) return m.reply(`*Penggunaan:\n${usedPrefix + command} teks*\n\n> *Contoh:\n${usedPrefix + command} tes*`)
let sticker = global.db.data.users[m.sender].sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) return m.reply('*Kamu tidak memiliki izin untuk mengubah perintah stiker ini*')
sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Berhasil!`)
}
handler.help = ['setcmd']
handler.tags = ['database', 'premium']
handler.command = /^setcmd$/i
handler.premium = true
handler.register = true
export default handler
