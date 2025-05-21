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
let numbers = args.filter(arg => arg.match(/^\d+$/)).map(num => num.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
if (!numbers.length) return m.reply(`🍡 *Contoh penggunaan: ${usedPrefix + command} 628xxxx 628xxxx*`)
try {
let res = await conn.groupParticipantsUpdate(m.chat, numbers, 'add')
let success = res.filter(r => r.status === '200')
let failed = res.filter(r => r.status !== '200')
let msg = `🍓 *Tambah anggota selesai!*\n`
if (success.length) msg += `🧁 Berhasil: ${success.map(u => '@' + u.jid.split('@')[0]).join(', ')}\n`
if (failed.length) {
let code = await conn.groupInviteCode(m.chat)
msg += `🍩 Gagal: ${failed.map(u => '@' + u.jid.split('@')[0]).join(', ')}\n`
msg += `🎟️ *Link invite: https://chat.whatsapp.com/${code}*`
}
m.reply(msg.trim(), null, { mentions: numbers })
} catch (e) {
console.error(e)
m.reply('🍩 *Yahh gagal nambahin anggota... mungkin ada yang private atau nomornya salah~*')
}
}

handler.help = ['add']
handler.tags = ['group']
handler.command = /^(add)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler