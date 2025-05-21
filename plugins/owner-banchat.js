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

let handler = async (m, { args }) => {
let id = args[1] ? args[1] : m.chat
let chat = global.db.data.chats[id]
if (args[0]) {
if (isNaN(args[0])) return m.reply('🍭 *Hanya Angka Ya Sayang!*')
let jumlahHari = 86400000 * args[0]
let now = new Date() * 1
if (now < chat.isBannedTime) chat.isBannedTime += jumlahHari
else chat.isBannedTime = now + jumlahHari
chat.isBanned = true
m.reply(`🍬 *Grup ini telah dibanned selama ${args[0]} hari!*`)
} else {
chat.isBannedTime = 999
chat.isBanned = true
m.reply('🍓 *Grup ini berhasil dibanned secara permanen yaa~*')
}
}

handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(ban(chat|gc))$/i
handler.owner = true

export default handler