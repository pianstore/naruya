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

let handler = async (m, { conn, usedPrefix, command, text }) => {
let user = global.db.data.users
let pacar = user[m.sender].tembak
if (user[m.sender].tembak == "")
return m.reply(`🙄 *Ngaca dulu bodoh, siapa juga yang nembak kamu? Halusinasi parah sih~*`)
if (user[m.sender].tembak == m.sender)
return m.reply(`❌ *Cuma @${user[m.sender].tembak.split("@")[0]} yang bisa jawab tembakannya ya, bukan kamu!*`, false, { mentions: [user[m.sender].tembak] })
if (!user[m.sender].ditembak)
return m.reply(`💤 *Permintaan gak valid, kamu mimpi kali ya?*`)
user[m.sender].tembak = ""
user[pacar].tembak = ""
user[pacar].ditembak = false
await m.reply(`💅 *Maaf ya @${pacar.split("@")[0]}, tapi kamu gak lolos seleksi aku~*\n\n*Next time coba nembak sambil bawa cilok, siapa tau aku mau~*`, false, { mentions: [pacar] })
}

handler.help = ['tolak']
handler.tags = ['fun']
handler.command = /^(tolak)$/i
handler.register = true

export default handler