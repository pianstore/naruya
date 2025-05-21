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
let user = global.db.data.users[m.sender]
let { stock } = global.db.data.bots
const recipes = {
pickaxe: {
emoji: '🍡',
needs: { wood: 20, rock: 15, iron: 10, string: 30 },
give: { pickaxe: 1, pickaxedurability: 50 }
},
sword: {
emoji: '🍰',
needs: { wood: 15, iron: 25, diamond: 2 },
give: { sword: 1, sworddurability: 50 }
},
fishingrod: {
emoji: '🍩',
needs: { wood: 15, iron: 5, string: 30 },
give: { fishingrod: 1, fishingroddurability: 50 }
},
armor: {
emoji: '🍬',
needs: { iron: 50, emerald: 5, diamond: 8 },
give: { armor: 1, armordurability: 60 }
},
atm: {
emoji: '🍪',
needs: { emerald: 6, diamond: 12, money: 30000 },
give: { atm: 1, fullatm: 1000000000 }
}
}

let item = (args[0] || '').toLowerCase()
if (!item || !(item in recipes)) {
let list = Object.entries(recipes).map(([k, v]) => `*• ${k.toUpperCase()} ${v.emoji}*`).join('\n')
let how = Object.entries(recipes).map(([k, v]) => {
let needs = Object.entries(v.needs).map(([res, val]) => `*〉 ${val} ${res}*`).join('\n')
return `🍮 *${k.toUpperCase()}:*\n${needs}`
}).join('\n\n')
return m.reply(`🍧 *List Crafting Tersedia:*\n\n${list}\n\n📦 *Resep Crafting:*\n${how}\n\n*Contoh: ${usedPrefix + command} pickaxe*`)
}
if (user[item] > 0) return m.reply(`🍓 *Kamu sudah punya ${item}, tidak bisa membuat lagi yaa~*`)
let need = recipes[item].needs
let notEnough = Object.entries(need).filter(([k, v]) => (user[k] || 0) < v)
if (notEnough.length) {
let teks = notEnough.map(([k, v]) => `*• ${v - (user[k] || 0)} ${k}*`).join('\n')
return m.reply(`🍥 *Bahan tidak cukup untuk membuat ${item.toUpperCase()}*\n\n${teks}`)
}
for (let [k, v] of Object.entries(need)) {
user[k] -= v
stock[k] = (stock[k] || 0) + v
}
for (let [k, v] of Object.entries(recipes[item].give)) {
user[k] = v
}
m.reply(`🧁 *Berhasil membuat 1 ${item.toUpperCase()} ${recipes[item].emoji}*`)
}
handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)$/i
handler.group = true
handler.rpg = true
handler.register = true

export default handler