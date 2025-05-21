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

let tfinventory = {
others: {
money: true
},
tfitems: {
potion: true,
trash: true,
wood: true,
rock: true,
string: true,
emerald: true,
diamond: true,
gold: true,
iron: true
},
tfcrates: {
common: true,
uncommon: true,
mythic: true,
legendary: true
},
tfpets: {
horse: 10,
cat: 10,
fox: 10,
dog: 10
}
}

let rewards = {
common: {
money: 51,
trash: 11,
potion: { chance: 20, amount: 1 },
common: { chance: 10, amount: 1 },
uncommon: { chance: 3, amount: 1 }
},
uncommon: {
money: 101,
trash: 31,
potion: { chance: 20, amount: 1 },
diamond: { chance: 5, amount: 1 },
common: { chance: 10, amount: 1 },
uncommon: { chance: 8, amount: 1 },
mythic: { chance: 3, amount: 1 },
wood: { chance: 15, amount: [1, 2] },
rock: { chance: 15, amount: [1, 2] },
string: { chance: 15, amount: [1, 2] }
},
mythic: {
money: 201,
exp: 50,
trash: 61,
potion: { chance: 25, amount: [1, 2] },
emerald: { chance: 12, amount: 1 },
diamond: { chance: 10, amount: 1 },
gold: { chance: 10, amount: [1, 2] },
iron: { chance: 12, amount: [1, 3] },
common: { chance: 10, amount: 1 },
uncommon: { chance: 8, amount: 1 },
mythic: { chance: 6, amount: 1 },
legendary: { chance: 3, amount: 1 },
pet: { chance: 3, amount: 1 },
wood: { chance: 15, amount: [1, 2] },
rock: { chance: 15, amount: [1, 2] },
string: { chance: 15, amount: [1, 2] }
},
legendary: {
money: 301,
exp: 50,
trash: 101,
potion: { chance: 30, amount: [1, 3] },
emerald: { chance: 15, amount: 1 },
diamond: { chance: 12, amount: 1 },
gold: { chance: 12, amount: [1, 2] },
iron: { chance: 15, amount: [1, 3] },
common: { chance: 10, amount: 1 },
uncommon: { chance: 10, amount: 1 },
mythic: { chance: 7, amount: 1 },
legendary: { chance: 3, amount: 1 },
pet: { chance: 4, amount: 1 },
wood: { chance: 15, amount: [1, 3] },
rock: { chance: 15, amount: [1, 3] },
string: { chance: 15, amount: [1, 3] }
}
}

let handler = async (m, { conn, command, args, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let { stock } = global.db.data.bots
let crates = Object.keys(tfinventory.tfcrates).filter(v => user[v])
let info = `🍪 *DAFTAR PETI KAMU:*\n\n${crates.map(v => `*• ${global.rpg.emoticon(v)} ${capitalize(v)}: ${toRupiah(user[v])}*`).join('\n')}

🎁 *Cara Buka Peti:*
*• ${usedPrefix}open <nama> <jumlah>*
*• ${usedPrefix}open all*
`
let type = (args[0] || '').toLowerCase()
let count = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1
if (type === 'all') {
let totalLog = []
for (let key of crates) {
let total = user[key]
if (total > 0) {
let hasil = await openCrate(user, key, total)
user[key] -= total
stock[key] += total
if (hasil) totalLog.push(`🍩 *${capitalize(key)} Crate:*\n${hasil}`)
}
}
return m.reply(totalLog.length ? `✨ *Kamu membuka semua peti yang kamu punya!*\n\n${totalLog.join('\n\n')}` : '🧁 *Kamu tidak punya peti untuk dibuka.*')
}
if (!(type in rewards)) return m.reply(info)
if (user[type] < count) return m.reply(`🧁 *Peti ${capitalize(type)} kamu kurang, kamu hanya punya ${toRupiah(user[type])}*`)
let hasil = await openCrate(user, type, count)
user[type] -= count
stock[type] += count
m.reply(`🍓 *Kamu membuka ${count} ${capitalize(type)} Crate!*\n\n${hasil}`)
}

handler.help = ['open']
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

function isNumber(n) {
let num = parseInt(n)
return typeof num === 'number' && isFinite(num)
}

function capitalize(txt) {
return txt.charAt(0).toUpperCase() + txt.slice(1)
}

function toRupiah(n) {
let num = parseInt(n)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}

Array.prototype.getRandom = function () {
return this[Math.floor(Math.random() * this.length)]
}

async function openCrate(user, type, count) {
let crateReward = {}
for (let i = 0; i < count; i++) {
for (let [reward, value] of Object.entries(rewards[type])) {
if (typeof value === 'number') {
crateReward[reward] = (crateReward[reward] || 0) + value
} else if (typeof value === 'object' && value.chance) {
if (Math.random() * 100 < value.chance) {
let jumlah = Array.isArray(value.amount) ? value.amount.getRandom() : value.amount
crateReward[reward] = (crateReward[reward] || 0) + jumlah
}
}
}
}
for (let [k, v] of Object.entries(crateReward)) {
if (!(k in user)) user[k] = 0
user[k] += v
}
if (!Object.keys(crateReward).length) return '🥺 *Tidak mendapatkan apa pun...*'
return Object.entries(crateReward).map(([k, v]) => `*${global.rpg.emoticon(k)} ${capitalize(k)}: ${toRupiah(v)}*`).join('\n')
}