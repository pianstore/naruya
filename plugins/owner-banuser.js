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
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) return m.reply(`🍩 *Tag pengguna atau masukkan nomornya ya!*\n\n🍡 *Contoh:*\n${usedPrefix + command} @${m.sender.split('@')[0]} 4`, false, { mentions: [m.sender] })
if (!global.db.data.users[who]) global.db.data.users[who] = {}
let user = global.db.data.users[who]
if (args[1]) {
if (isNaN(args[1])) return m.reply('🍮 *Cuma bisa angka yaa, bukan huruf!*')
let jumlahHari = 86400000 * args[1]
let now = new Date() * 1
if (now < user.bannedTime) user.bannedTime += jumlahHari
else user.bannedTime = now + jumlahHari
user.banned = true
m.reply(`🧁 *Yay! Berhasil banned @${who.split('@')[0]} selama ${args[1]} hari~*`, false, { mentions: [who] })
m.reply(`🍬 *Kamu telah dibanned oleh Owner selama ${args[1]} hari yaa!*`, who)
} else {
user.bannedTime = 999
user.banned = true
m.reply(`🍫 *Berhasil banned @${who.split('@')[0]} tanpa batas waktu*`, false, { mentions: [who] })
m.reply(`🍧 *Kamu telah dibanned oleh Owner yaa~*`, who)
}
}

handler.help = ['banned']
handler.tags = ['owner']
handler.command = /^(ban(user)?|banned(user)?)$/i
handler.owner = true
handler.register = true

export default handler