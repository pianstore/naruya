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

import moment from 'moment-timezone'

let handler = async function (m, { args, usedPrefix, command }) {
if (!global.db.data.users[m.sender]?.registered)
return m.reply(`🍡 *Kamu belum terdaftar~*\nSilakan daftar dulu dengan *.${usedPrefix}daftar yaa!*`)
if (!args[0])
return m.reply(`🔐 *Masukkan PIN untuk menghapus akunmu!*\n*Contoh: .${command} 123456*\n*Kalau lupa, ketik .cekpin*`)
let user = global.db.data.users[m.sender]
if (String(args[0]) !== String(user.pin))
return m.reply(`❌ *PIN-nya salah, sayang~*\nCek lagi pakai *.cekpin* yaa!`)
let name = user.name
let age = user.age
let waktu = moment().tz('Asia/Jakarta').format('dddd, D MMMM YYYY • HH:mm:ss')
delete global.db.data.users[m.sender]
m.reply(`🌸 *Data kamu berhasil dihapus dari database.*\n*Terima kasih sudah bersama kami~*\n*Semoga kita bisa bertemu lagi nanti yaa~*`)
let capChannel = `
💔 *PENGGUNA TELAH UNREGISTER* 💔
────────────────────────
🍓 *Nama: ${name}*
🎂 *Umur: ${age} tahun*
🫧 *Nomor: wa.me/${m.sender.split("@")[0]}*
🕒 *Waktu: ${waktu} WIB*
────────────────────────
`.trim()
await conn.sendMessage('120363335665264747@newsletter', {
text: capChannel
})
}

handler.help = ['unreg']
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler