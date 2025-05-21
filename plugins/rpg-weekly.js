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
exp: 20000,
money: 25000,
potion: 5,
limit: 10,
diamond: 1
}

const cooldown = 604800000
let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
if (new Date - user.lastweekly < cooldown) {
let remaining = user.lastweekly + cooldown - new Date
let h = Math.floor(remaining / 3600000)
let mnt = Math.floor(remaining / 60000) % 60
let s = Math.floor(remaining / 1000) % 60
return m.reply(`🍮 *Bonus mingguan sudah kamu klaim!* 
⏳ *Tunggu ${h} jam ${mnt} menit ${s} detik lagi yaa~*`)
}
let teks = '🍡 *Weekly Reward Time~!* 🎁\n────────────────────────────\n'
for (let reward of Object.keys(rewards)) {
if (reward in user) {
user[reward] += rewards[reward]
teks += `*${global.rpg.emoticon(reward)} ${capitalize(reward)}: +${toRupiah(rewards[reward])}*\n`
}
}
teks += '────────────────────────────\n🌷 *Terima kasih sudah tetap aktif minggu ini!*'
m.reply(teks.trim())
user.lastweekly = new Date * 1
}

handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly|mingguan)$/i
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