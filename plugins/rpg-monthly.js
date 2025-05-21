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
exp: 50000,
money: 49999,
potion: 10,
mythic: 3,
legendary: 1,
limit: 20
}

const cooldown = 2592000000
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
if (new Date - user.lastmonthly < cooldown) {
let remaining = ((user.lastmonthly + cooldown) - new Date())
let h = Math.floor(remaining / 3600000)
let mnt = Math.floor(remaining / 60000) % 60
let s = Math.floor(remaining / 1000) % 60
return m.reply(`🍡 *Kamu sudah mengambil bonus bulanan!*\n\n⏳ *Silakan tunggu ${h} jam ${mnt} menit ${s} detik lagi yaa~*`)
}
let text = '🍬 *Kamu mendapatkan hadiah bulanan~!*\n────────────────────────────\n'
for (let reward of Object.keys(rewards)) {
if (reward in user) {
user[reward] += rewards[reward]
text += `*${global.rpg.emoticon(reward)} ${capitalize(reward)}: +${toRupiah(rewards[reward])}*\n`
}
}
text += '────────────────────────────\n🌸 *Terima kasih sudah aktif bermain~!*'
m.reply(text.trim())
user.lastmonthly = new Date * 1
}

handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly|bulanan)$/i
handler.register = true
handler.group = true
handler.cooldown = cooldown
handler.rpg = true

export default handler

function capitalize(str) {
return str.charAt(0).toUpperCase() + str.slice(1)
}

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}