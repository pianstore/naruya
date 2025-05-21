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

const items = [
'money', 'bank', 'potion', 'trash', 'wood',
'rock', 'string', 'petFood', 'emerald',
'diamond', 'gold', 'iron', 'common',
'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]

let handler = async (m, { conn, usedPrefix, command, args, groupMetadata }) => {
let type = (args[0] || '').toLowerCase()
let count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let user = global.db.data.users

if (!args[0]) return m.reply('Masukan nama item yang ingin di giveaway')
if (!args[1]) return m.reply('Masukan jumlah item yang ingin di giveaway')
if (!items.includes(type)) return m.reply(`List Item Yang Bisa Di Giveaway : \n${items.map(v => { return `${global.rpg.emoticon(v)} ${v}` }).join('\n')}`)
if (user[m.sender][type] * 1 < count) return m.reply(`Mohon Maaf ${type} ${global.rpg.emoticon(type)} Tidak Cukup, Kamu hanya memiliki *${toRupiah(user[m.sender][type])} ${type}* ${global.rpg.emoticon(type)} !`)

let random = groupMetadata.participants.map(v => v.id)
let winner = random.getRandom()

await m.reply('Sedang Mencari Pemenang...')
await delay(10000)

let validWinner = false
while (!validWinner) {
if (typeof user[winner] === 'undefined' || user[winner] === m.sender || user[winner] === conn.user.jid) {
let random2 = groupMetadata.participants.map(v => v.id)
winner = random2.getRandom()

await m.reply('Pemenang Tidak Valid, Mencari Ulang...')
await delay(10000)
} else {
validWinner = true

await m.reply(`Selamat Kepada @${winner.split('@')[0]} Telah Mendapatkan *${toRupiah(count)} ${type}* ${global.rpg.emoticon(type)}`, false, { mentions: [winner] }).then(() => {
user[m.sender][type] -= count
user[winner][type] += count
})
}
}
}
handler.help = ['giveaway']
handler.tags = ['rpg']
handler.command = /^(giveaway)$/i

handler.group = true

export default handler

function isNumber(x) {
let num = parseInt(x)
return typeof num === 'number' && isFinite(num)
}

const delay = time => new Promise(res => setTimeout(res, time))

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}