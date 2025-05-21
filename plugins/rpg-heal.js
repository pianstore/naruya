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

let handler = async (m, { args }) => {
let user = global.db.data.users[m.sender]
let maxHealth = 100 + user.level * 10
if (user.health >= maxHealth) return m.reply(`❤️ *Darah kamu sudah penuh, sayang~*`)
let heal = 40 + (user.phoenix * 5)
let jumlah = Math.min(Math.max(1, isNumber(args[0]) ? parseInt(args[0]) : Math.ceil((maxHealth - user.health) / heal)), Number.MAX_SAFE_INTEGER)
if (user.potion < jumlah) return m.reply(`🥤 *Kamu butuh ${jumlah - user.potion} lagi Potion untuk sembuh total~*\n📦 *Potion kamu sekarang: ${user.potion}*`)
user.potion -= jumlah
user.health = Math.min(user.health + (heal * jumlah), maxHealth)
m.reply(`✨ *Berhasil menggunakan ${jumlah} 🥤Potion!*\n❤️ *Darah kamu sekarang: ${user.health} / ${maxHealth}*`)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^heal$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

function isNumber(number) {
let num = parseInt(number)
return typeof num === 'number' && isFinite(num)
}