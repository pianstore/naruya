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

let handler = async function (m, { conn }) {
let user = global.db.data.users[m.sender]
if (!user.registered) return m.reply('*🚫 Kamu belum terdaftar!*\nSilakan daftar dengan `.daftar`')
if (!user.pin) return m.reply('*❌ PIN tidak ditemukan! Coba daftar ulang dengan `.unreg <PIN>` lalu `.daftar`*')

let caption = `🔐 *PIN : ${user.pin}*\n*Gunakan kode di atas untuk unreg!*`
m.reply(caption)
}

handler.help = ['cekpin']
handler.tags = ['xp']
handler.command = /^(cekpin)$/i
handler.register = true

export default handler