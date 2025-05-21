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

let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*Welcome berhasil diatur*\n*@user (Mention)*\n*@subject (Judul Grup)*\n*@desc (Deskripsi Grup)*')
} else return m.reply(`*Teksnya mana sayang?*\n\n*contoh:*\n*${usedPrefix + command} hai, @user!*\n*Selamat datang di grup @subject*\n\n*@desc*`)
}
handler.help = ['setwelcome']
handler.tags = ['group']
handler.command = /^(setwelcome|setw)$/i
handler.group = true
handler.owner = true

export default handler 
