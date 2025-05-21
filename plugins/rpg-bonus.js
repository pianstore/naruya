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

let handler = async (m) => {
let user = global.db.data.users[m.sender]
let time = user.lastbonus + 86400000
if (new Date - user.lastbonus < 86400000) 
return m.reply(`🍰 *Bonus Harian Kamu Sudah Diambil!*\n\n⏳ *Tunggu ${msToTime(time - new Date())} lagi yaa~*`)
let money = Math.floor(Math.random() * 50000000)
user.money += money
user.lastbonus = new Date * 1
m.reply(`🍓 *Selamat~! Kamu dapat bonus harian sebesar:*\n\n💸 *+Rp ${toRupiah(money)}*\n\n🌸 *Jangan lupa balik lagi besok, yaa~*`)
}

handler.help = ['bonus']
handler.tags = ['rpg']
handler.command = /^(bonus)$/i
handler.register = true
handler.group = true
handler.premium = true
handler.rpg = true

export default handler

function msToTime(duration) {
let milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}