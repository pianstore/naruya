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

const rewards = {
exp: 10000,
money: 20000,
potion: 3,
limit: 10
}

const cooldown = 86400000
let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
if (new Date - user.lastdaily < cooldown) {
let remaining = user.lastdaily + cooldown - new Date()
let hours = Math.floor(remaining / 3600000)
let minutes = Math.floor((remaining % 3600000) / 60000)
let seconds = Math.floor((remaining % 60000) / 1000)
return m.reply(`🕒 *Kamu sudah ambil bonus harian hari ini!*\n\n*Tunggu ${hours} jam ${minutes} menit ${seconds} detik lagi yaa~*`)
}
let text = ''
for (let reward in rewards) if (reward in user) {
user[reward] += rewards[reward]
text += `*${global.rpg.emoticon(reward)} ${reward}: +${toRupiah(rewards[reward])}*\n`
}
user.lastdaily = new Date * 1
m.reply(`🎁 *Hadiah Harian Diterima~!*\n\n${text.trim()}`)
}

handler.help = ['daily']
handler.tags = ['rpg']
handler.command = /^(daily|harian)$/i
handler.register = true
handler.group = true
handler.cooldown = cooldown
handler.rpg = true

export default handler

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}