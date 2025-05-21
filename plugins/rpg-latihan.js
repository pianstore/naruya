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

let handler = async (m, { conn }) => {
if (new Date - global.db.data.users[m.sender].lastlatihan > 86400000) {
global.db.data.users[m.sender].limit += 10
global.db.data.users[m.sender].lastlatihan = new Date * 1
m.reply('🍓 *Kamu selesai berlatih hari ini!*\n✨ *Limit bertambah +10 sebagai hasil dari kerja kerasmu!*')
} else m.reply('🍡 *Kamu sudah latihan hari ini, istirahat dulu yaa~*\n⏳ *Coba lagi besok untuk dapat limit baru!*')
}

handler.help = ['latihan']
handler.tags = ['rpg']
handler.command = /^latihan$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler