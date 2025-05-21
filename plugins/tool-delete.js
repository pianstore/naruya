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

let handler = async (m, { conn, isOwner }) => {
if (!m.quoted) return
let { chat, fromMe, id, participant, sender } = m.quoted
let charm = global.db.data.chats[m.chat]
let isGroupMsg = m.isGroup
let quotedSender = participant || sender
let isOwnerQuoted = global.config.owner.some(([num]) => quotedSender.includes(num))
let isModsQuoted = global.mods && global.mods.includes(quotedSender)
let isProtected = isOwnerQuoted || isModsQuoted
if (isProtected) return m.reply(`⚠️ *Tidak dapat menghapus pesan dari Owner/Developer!*`)
try {
if ((!charm?.nsfw && isGroupMsg) || isOwner) {
await conn.sendMessage(chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id,
participant: quotedSender
}
})
} else {
m.reply(`🚫 *Tidak dapat hapus pesan saat NSFW aktif!*`)
}
} catch (e) {
console.log(e)
m.reply('❌ *Gagal menghapus pesan. Mungkin sudah tidak tersedia atau bukan milik pengguna lain.*')
}
}

handler.help = ['delete']
handler.tags = ['group']
handler.command = /^(d|delete|del)$/i
handler.group = true
handler.register = true
handler.admin = true

export default handler