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

import { randomInt } from 'crypto'
import fs from 'fs'
import moment from 'moment-timezone'

let Reg = /\|?(.*?)(?:[.|] *?(\d+))?$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
try {
let hwaifu = JSON.parse(fs.readFileSync('./json/hwaifu.json', 'utf-8'))
let pp
try {
pp = await conn.profilePictureUrl(m.sender, 'image')
} catch {
pp = fs.readFileSync('./src/avatar_contact.png')
}
let user = global.db.data.users[m.sender]
if (user.registered) return m.reply(`🌸 *Kamu sudah terdaftar, sayang~*\n*Ingin daftar ulang? ketik: ${usedPrefix}unreg <PIN>*`)
let name = text?.trim() || await conn.getName(m.sender)
let match = name.match(Reg)
name = match[1] || await conn.getName(m.sender)
let age = match[2] ? parseInt(match[2]) : null
if (!age) {
let list = []
for (let i = 10; i < 50; i++) {
list.push([`${usedPrefix + command} ${name}.${i}`, i.toString(), `🎂 Umur ${i}`])
}
return conn.textList(m.chat, `✨ *Nama kamu:* ${name}\n*Silakan pilih umur kamu di bawah ini yaa~*`, false, list, m, { noList: true,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: "Hai hai~ " + name,
body: global.config.watermark,
thumbnail: fs.readFileSync("./media/thumbnail.jpg"),
renderLargerThumbnail: true,
mediaUrl: hwaifu.getRandom(),
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
}
if (!name) return m.reply('📝 *Nama tidak boleh kosong yaa~ (gunakan huruf)*')
if (!age) return m.reply('🎂 *Umur tidak boleh kosong dong~ (pakai angka ya)*')
if (age > 50) return m.reply('🧓 *Ihhhh Om-om detected! (。-`ω´-)*')
if (age < 10) return m.reply('👶 *Halah bocil, sini masih belum boleh main~*')
if (name.length > 50) return m.reply('📛 *Nama terlalu panjang, max 50 karakter aja ya~*')
await global.loading(m, conn)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.commandLimit = user.commandLimit === 1000 ? user.commandLimit : 1000
user.registered = true
user.pin = randomInt(100000, 999999)
let capUser = `
🎀 *R E G I S T R A S I   B E R H A S I L* 🎀
────────────────────────
🍓 *Nama: ${user.name}*
🎂 *Umur: ${user.age} tahun*
🔐 *PIN Kamu: ${user.pin}*
────────────────────────
📌 *Simpan baik-baik PIN-mu ya~*
📜 *Ketik .menu untuk mulai petualanganmu!*
`.trim()
await conn.sendFile(m.chat, pp, name + '.jpeg', capUser, m, false, false, {
smlcap: true,
except: [user.pin]
})
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['daftar']
handler.tags = ['xp']
handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler