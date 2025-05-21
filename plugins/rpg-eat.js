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
let emot = v => global.rpg.emoticon(v)
let input = (args[0] || '').toLowerCase()
let jumlah = Math.min(Math.max(parseInt(args[1]) || 1, 1), Number.MAX_SAFE_INTEGER)
let maxEnergy = 50 + user.level * 5
let maxHealth = 100 + user.level * 10
if (!input) {
let list = makanan.filter(v => user[v] > 0).map(v => `• ${emot(v)} ${capitalize(v)}`).join('\n')
return m.reply(user ? `🍱 *Kamu mau makan apa, sayang?*\n\n${list}` : `🍳 *Belum punya makanan~ masak dulu pakai .cook*`)
}
if (input == 'all') {
let log = []
for (let food of makanan) {
while (user[food] > 0 && user.energy < maxEnergy) {
let { energy, health } = makananEfek[food]
user[food]--
user.energy = Math.min(user.energy + energy, maxEnergy)
user.health = Math.min(user.health + health, maxHealth)
log.push(`*🍽️ ${emot(food)} ${capitalize(food)} ➜  ⚡+${energy} ❤️+${health}*`)
}
}
return log.length ? m.reply(`*Kamu makan sampai kenyang!*\n\n${log.join('\n')}`) : m.reply('🥺 *Energi kamu sudah penuh atau tidak ada makanan.*')
}
if (!makanan.includes(input)) return m.reply('🥺 *Makanan tidak dikenal~*')
if (user[input] < 1) return m.reply(`😢 *Kamu tidak punya ${capitalize(input)}!*`)
if (user.energy >= maxEnergy) return m.reply('⚡ *Energi kamu sudah penuh, sayang~*')
let eaten = 0
for (let i = 0; i < jumlah; i++) {
if (user[input] < 1 || user.energy >= maxEnergy) break
let { energy, health } = makananEfek[input]
user[input]--
user.energy = Math.min(user.energy + energy, maxEnergy)
user.health = Math.min(user.health + health, maxHealth)
eaten++
}
if (!eaten) return m.reply('⚡ *Energi sudah penuh atau makanan habis!*')
m.reply(`🍽️ *Kamu memakan ${eaten} ${capitalize(input)}*\n⚡ *Energi sekarang: ${user.energy} / ${maxEnergy}*\n❤️ *Darah sekarang: ${user.health} / ${maxHealth}*`)
}

handler.help = ['eat']
handler.tags = ['rpg']
handler.command = /^(makan|eat)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

const makanan = [
"steak", "ayam_goreng", "ribs", "roti", "udang_goreng", "bacon",
"pisang", "anggur", "mangga", "jeruk", "apel"
]

const makananEfek = {
pisang: { energy: 20, health: 5 },
anggur: { energy: 20, health: 5 },
mangga: { energy: 20, health: 5 },
jeruk: { energy: 20, health: 5 },
apel: { energy: 20, health: 5 },
steak: { energy: 40, health: 10 },
ayam_goreng: { energy: 40, health: 10 },
ribs: { energy: 40, health: 10 },
roti: { energy: 30, health: 8 },
udang_goreng: { energy: 35, health: 9 },
bacon: { energy: 30, health: 8 }
}

function capitalize(txt) {
return txt.charAt(0).toUpperCase() + txt.slice(1)
}