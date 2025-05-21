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
if (!m.mentionedJid[0]) throw `🍩 *Tag user yang ingin dikurangi atau reset warningnya*\n\n*Contoh: .delwarn @user amount/all*`
let user = global.db.data.users[m.mentionedJid[0]]
let jumlah = args[1]?.toLowerCase() === 'all' ? user.warning : parseInt(args[1]) || 1
user.warning -= jumlah
if (user.warning < 0) user.warning = 0
await m.reply(`🍰 *Warning ${args[1]?.toLowerCase() === 'all' ? 'dihapus seluruhnya' : 'dikurangi'}!*\n\n👤 *User: @${m.mentionedJid[0].split('@')[0]}*\n⚠️ *Total Warning: ${user.warning}*`, false, { mentions: [m.mentionedJid[0]] })
}

handler.help = ['delwarning']
handler.tags = ['group']
handler.command = /^(delwarn|delwarning)$/i
handler.group = true
handler.admin = true
handler.register = true

export default handler