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

import fs from 'fs'
export async function before(m) {
conn.dungeon = conn.dungeon ? conn.dungeon : {}
let room = Object.values(conn.dungeon).find(room => room.id.startsWith('dungeon-') && [room.game.player1, room.game.player2, room.game.player3, room.game.player4].includes(m.sender) && room.state == 'MENUNGGU')
if (room) {

let p1 = room.game.player1 || ''
let p2 = room.game.player2 || ''
let p3 = room.game.player3 || ''
let p4 = room.game.player4 || ''
let c1 = room.player1 || ''
let c2 = room.player2 || ''
let c3 = room.player3 || ''
let c4 = room.player4 || ''

let PLAYER = [room.game.player1]
if (room.game.player2) PLAYER.push(room.game.player2)
if (room.game.player3) PLAYER.push(room.game.player3)
if (room.game.player4) PLAYER.push(room.game.player4)
let P = data(PLAYER)
if (/^(sendiri|solo|dewean)$/i.test(m.text.toLowerCase())) {
let lmao = ' *! Kamu tidak bisa bermain solo karena Kamu sudah memiliki pasangan*\n> *➞ silakan ketik [gass] untuk bermain dengan partner lainnya* '
if (room.player2 || room.player3 || room.player4) return conn.reply(m.chat, lmao, false, {
quoted: m
})
room.state = 'PLAYING'
let str = `
*➞ Room ID:* ${room.id}
*👩‍🏫 Pemain:*
${P}
`.trim()
m.reply(str, room.player1, {
contextInfo: {
mentionedJid: this.parseMention(str)
}
})

setTimeout(async () => {
let users = global.db.data.users[p1]
let { health, sword } = room.less
let { exp, money, sampah, potion, diamond, iron, kayu, batu, string, common, uncommon, mythic, legendary, pet, petfood } = room.price
let str2 = `
*• Darah:* -${health * 1}
*• Sword Durability:* -${sword * 1}
- - - - - - - - - - - - - - - - -

*- HADIAH YANG DI DAPATKAN -*
➞ *Exp:* +${exp}
➞ *Money:* Rp. ${money}
➞ *Trash:* ${sampah}${potion == 0 ? '': '\n*➞ Potion:* ' + potion}${petfood == 0 ? '': '\n*➞  Pet Food:* ' + petfood * 1}${kayu == 0 ? '': '\n*➞ Wood:* ' + kayu}${batu == 0 ? '': '\n*➞ Stone:* ' + batu}${string == 0 ? '': '\n*➞ String:* ' + string}${iron == 0 ? '': '\n*➞ Iron:* ' + iron}${diamond == 0 ? '': '\n*➞ Diamond:* ' + diamond}${common == 0 ? '': '\n*➞ Common:* ' + common}${uncommon == 0 ? '': '\n*➞ Uncommon:* ' + uncommon}
`.trim()
users.health -= health * 1
users.sworddurability -= sword * 1
users.money += money * 1
users.exp += exp * 1
users.trash += sampah * 1
users.potion += potion * 1
users.diamond += diamond * 1
users.iron += iron * 1
users.wood += kayu * 1
users.rock += batu * 1
users.string += string * 1
users.common += common * 1
users.uncommon += uncommon * 1
users.mythic += mythic * 1
users.legendary += legendary * 1
users.pet += pet * 1
users.petfood += petfood * 1
users.lastdungeon = new Date * 1
let dungimg = [ 'dungeon1.jpg', 'dungeon2.jpg', 'dungeon3.jpg' ]
await conn.adReply(room.player1, str2, '- D U N G E O N -', '', fs.readFileSync('./media/' + dungimg.getRandom()), global.config.website, m)
if (mythic > 0) {
let str3 = '*🎉 Selamat kak kamu mendapatkan barang Rare yaitu:*' + mythic + '*Mythic Crates*'
m.reply(str3, room.player1)
}
if (legendary > 0 || pet > 0) {
let str3 = (mythic > 0 ? ' *dan* ': ' *Selamat* ') + '  *Kamu mendapatkan barang Epic yaitu:* ' + (pet > 0 && legendary > 0 ? ` *${legendary} legendary Crates dan ${pet} Pet Token* `: pet > 0 && legendary < 1 ? ` *${pet} Pet Token* `: legendary > 0 && pet < 1 ? ` *${legendary} Legendary Crates* `: '')
m.reply(str3, room.player1)
}
if ((users.health * 1) < 1 || (users.sworddurability * 1) < 1) {
let sword1 = (users.sworddurability * 1) < 1 && (users.sword * 1) == 1
let _sword1 = (users.sworddurability * 1) < 1 && (users.sword * 1) > 1
let __sword1 = (users.sworddurability * 1) < 1 && (users.sword * 1) > 0
let health1 = (users.health * 1) < 1
if (__sword1) {
users.sword -= 1
users.sworddurability = 0
}
let str3 = `${__sword1 ? `➞ ${_sword1 ? `*Level pedangmu berkurang 1 karena kerusakan*`: `*Pedangmu telah hancur, Silahkan buat ulang!*`} *ketik .craft sword*`: ''} ${health1 ? `${__sword1 ? '*dan* ': ''}*Kesehatanmu telah berkurang, silahkan sembuhkan dengan mengetik .heal*`: ''}`
m.reply(str3, room.player1, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
}
delete conn.dungeon[room.id]
}, pickRandom([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]))
if (conn.dungeon && room.state == 'PLAYING') delete conn.dungeon[room.id]

} else if (/^(gass?s?s?s?.?.?.?|mulai)$/i.test(m.text.toLowerCase())) {
let str = `
➞ *Room ID:* ${room.id}
👩‍🏫 *Pemain:*
${P}
`.trim()
m.reply(str, c1, {
contextInfo: {
mentionedJid: this.parseMention(str)
}
})
if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str, c2, {
contextInfo: {
mentionedJid: this.parseMention(str)
}
})
if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str, c3, {
contextInfo: {
mentionedJid: this.parseMention(str)
}
})
if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str, c4, {
contextInfo: {
mentionedJid: this.parseMention(str)
}
})

for (let _p of PLAYER) {
room.price.money += (Math.floor(Math.random() * 41)) * 1
room.price.exp += (Math.floor(Math.random() * 76)) * 1
room.game.sampah += (Math.floor(Math.random() * 16)) * 1
room.price.string += (pickRandom([0, 0, 5, 10, 3, 4, 0, 1, 0, 0, 0, 0, 0, 0])) * 1
room.price.kayu += (pickRandom([0, 0, 0, 1, 10, 4, 5, 0, 0, 0, 0, 0, 0])) * 1
room.price.batu += (pickRandom([0, 0, 0, 5, 10, 3, 4, 1, 0, 0, 0, 0, 0, 0])) * 1
room.game.common += (pickRandom([0, 0, 0, 3, 4, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0])) * 1
}

let users = global.db.data.users
let orang = PLAYER.length
let { health, sword } = room.less
let { exp,
money,
sampah,
potion,
diamond,
iron,
kayu,
batu,
string,
common,
uncommon,
mythic,
legendary,
pet,
petfood } = room.price

setTimeout(async () => {
let str2 = `👩‍🏫 *Pemain:*
${P}

*Darah:* -${health * 1}
*Sword Durability:* -${sword * 1}
- - - - - - - - - - - - - - - - - -

*- HADIAH YANG DI DAPATKAN -*
*➞ Exp:* ${exp * orang}
*➞ Money:* ${money * orang}
*➞ Trash:* ${sampah * orang}${potion == 0 ? '': '\n*➞ Potion:* ' + potion * orang}${petfood == 0 ? '': '\n*➞ Pet Food:* ' + petfood * orang}${kayu == 0 ? '': '\n*➞ Wood:* ' + kayu * orang}${batu == 0 ? '': '\n*➞ Stone:* ' + batu * orang}${string == 0 ? '': '\n*➞  String:* ' + string * orang}${iron == 0 ? '': '\n*➞ Iron:* ' + iron * orang}${diamond == 0 ? '': '\n*➞ Diamond:* ' + diamond * orang}${common == 0 ? '': '\n*➞ Common:* ' + common * orang}${uncommon == 0 ? '': '\n*➞ Uncommon:* ' + uncommon * orang}
`.trim()
let dungimg = [ 'dungeon1.jpg', 'dungeon2.jpg', 'dungeon3.jpg' ]
await conn.adReply(c1, str2, '- D U N G E O N -', '', fs.readFileSync('./media/' + dungimg.getRandom()), global.config.website, m)
if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str2, c2, {
contextInfo: {
mentionedJid: this.parseMention(str2)
}
})
if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str2, c3, {
contextInfo: {
mentionedJid: this.parseMention(str2)
}
})
if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str2, c4, {
contextInfo: {
mentionedJid: this.parseMention(str2)
}
})
}, pickRandom([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]))
for (let i = 0; i < PLAYER.length; i++) {
let p = PLAYER[i]
setTimeout(() => {
users[p].health -= health * 1
users[p].sworddurability -= sword * 1
users[p].money += money * 1
users[p].exp += exp * 1
users[p].trash += sampah * 1
users[p].potion += potion * 1
users[p].diamond += diamond * 1
users[p].iron += iron * 1
users[p].wood += kayu * 1
users[p].rock += batu * 1
users[p].string += string * 1
users[p].common += common * 1
users[p].uncommon += uncommon * 1
users[p].mythic += mythic * 1
users[p].legendary += legendary * 1
users[p].pet += pet * 1
users[p].petfood += petfood * 1
users[p].lastdungeon = new Date * 1

if ((users[p].health * 1) < 1) users[p].health = 0
if ((users[p].sworddurability * 1) < 1) {
users[p].sword -= 1
users[p].sworddurability = (users[p].sword * 1) * 50
}
}, i * 1500)
}
if (mythic > 0) {
let str3 = '🎉 *SELAMAT KAK* 🎉\n ' + P + '\n*Kamu mendapatkan beberapa barang Rare yaitu:* ' + mythic * orang + ' *Mythic Crates* '
m.reply(str3, c1, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
}

// Nak entok item Epic
if (legendary > 0 || pet > 0) {
let str3 = (mythic > 0 ? ' *dan* ': ' *Selamat* ' + P + ' *kamu* ') + ' *mendapatkan beberapa barang epic yaitu:* ' + (pet > 0 && legendary > 0 ? ` *${legendary * orang} Legendary Crates dan ${pet * orang} Pet Token* `: pet > 0 && legendary < 1 ? ` *${pet * orang} Pet Token* `: legendary > 0 && pet < 1 ? ` *${legendary * orang} Legendary Crates* `: '')
m.reply(str3, c1, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
}

// Biar lebih simple
let _1 = users && p1 && users[p1] ? users[p1]: {}
let _2 = users && p2 && users[p2] ? users[p2]: {}
let _3 = users && p3 && users[p3] ? users[p3]: {}
let _4 = users && p4 && users[p4] ? users[p4]: {}
let _H1 = _1 && _1.health ? (_1.health * 1): 100
let _H2 = _2 && _2.health ? (_2.health * 1): 100
let _H3 = _3 && _3.health ? (_3.health * 1): 100
let _H4 = _4 && _4.health ? (_4.health * 1): 100

// sd = SwordDurability :v
let _sd1 = _1 && _1.sworddurability ? (_1.sworddurability * 1): 100
let _sd2 = _2 && _2.sworddurability ? (_2.sworddurability * 1): 100
let _sd3 = _3 && _3.sworddurability ? (_3.sworddurability * 1): 100
let _sd4 = _4 && _4.sworddurability ? (_4.sworddurability * 1): 100

//Peringatan kalau health nya 0 ataupun sword durabilitynya 0
if ((_H1 || _H2 || _H3 || _H4 || _sd1 || _sd2 || _sd3 || _sd4) < 1) {

//Sama kek atas biar simple aja :v
let s1 = _sd1 ? (_sd1 * 1) < 1: false
let s2 = _sd2 ? (_sd2 * 1) < 1: false
let s3 = _sd3 ? (_sd3 * 1) < 1: false
let s4 = _sd4 ? (_sd4 * 1) < 1: false

//Buat nyimpen data sementara :v
let HEALT = []
SDH = []
SDM1L = []
for (let siapa in PLAYER) {
if ((users[siapa].health * 1) < 1) HEALT.push(siapa)
if ((users[siapa].sworddurability * 1) < 1 && (users[siapa].sword * 1) == 1) SDH.push(siapa)
if ((users[siapa].sworddurability * 1) < 1 && (users[siapa].sword * 1) !== 1) SDM1L.push(siapa)
}

// Convert Array to String
let sI = data(SDH)
let sH = data(SDM1L)
let H = data(HEALT)

let str3 = `${((SDH || SDH.length > 0) || (SDM1L || SDM1L.length > 0)) ? `⚔️Sword ${((SDH || SDH.length > 0 ? sI + ' *Hancur, silahkan crafting ⚔️Sword kembali dengan mengetik .craft sword*': '') + (SDM1L || SDM1L.length > 0 ? (SDH || SDH.length > 0 ? ', *Sedangkan ⚔️Sword*': '') + sH + '*Hancur, dan Menurun 1 Level*': ''))}`: ''}${HEALT || HEALT.length > 0 ? `*❤️Nyawa ${H} habis, silahkan isi ❤️Nyawa dengan mengetik .heal*`: ''}`
m.reply(str3, c1, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c2 && ![c1, c3, c4].includes(c2)) m.reply(str3, c2, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c3 && ![c1, c2, c4].includes(c3)) m.reply(str3, c3, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
if (c4 && ![c1, c2, c3].includes(c4)) m.reply(str3, c4, {
contextInfo: {
mentionedJid: this.parseMention(str3)
}
})
}
delete conn.dungeon[room.id]
}
if (conn.dungeon && room.state == 'PLAYING') delete conn.dungeon[room.id] // Hapuss nek iseh ono neng dungeon
}
return
}


/**
* pickRandom from array
* @param {Array} list
* @returns *
*/
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

/**
* Message if the conditions are not met
* @param {Number} sword
* @param {Number} armor
* @param {Number} healt
* @param {String} usedPrefix
* @returns String
*/
function item(sword, armor, health, usedPrefix) {
let sw = (sword * 1) < 1
let a = (armor * 1) < 1
let h = (health * 1) < 90
let str = `
${sw ? '*➞ Kamu belum mempunyai pedang*': ''}${sw && a && h ? ',': sw && a ? ' *dan* ': ''} ${a ? '*Armor!*': ''}${sw && a && h ? '\n*➞ Kesehaatan kamu minimal 90*': h ? '\n*➞ Kesehaatan kamu minimal 90*': ''}\n- - - - - - - - - - - - - - - \n${sw ? `\n*「🗡️」•Untuk Membuat Pedang Ketik: .craft sword*`: ''}${a ? `\n*「🥼」• Untuk Membuat Armor Ketik: .craft armor*`: ''}${h ? `\n*「❤️」• Untuk penyembuhan ketik: .heal*`: ''}
`.trim()
return str
}

/**
* To split jid
* @param {String} jid
* @returns String
*/
function M(jid) {
return '@' + jid.split('@')[0]
}

/**
* To clock
* @param {Number} ms
* @returns String
*/
function clockString(ms) {
let d = isNaN(ms) ? '--': Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--': Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--': Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--': Math.floor(ms / 1000) % 60
return ['\n' + d, ' *Hari ☀️*\n ', h, ' *Jam 🕐*\n ', m, ' *Menit ⏰*\n ', s, ' *Detik ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

/**
* Get data in Array
* @param {Array} DATA ( avaible array length is 4)
* @returns String
*/
function data(DATA) {
let panjang = DATA.length * 1
let msg = ''
DATA.forEach(player => {
if (panjang == 1) msg += `*${M(player)}*`
else {
if (DATA.indexOf(player) !== (panjang - 1)) msg += `*${M(player)}*, `
else msg += `dan *${M(player)}*`
}
})
return msg
}