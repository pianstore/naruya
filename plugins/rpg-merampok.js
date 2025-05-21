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

let handler = async (m, { conn, text, usedPrefix, command }) => {
let users = global.db.data.users
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
if (!who) return m.reply('🍡 *Tag orang yang mau kamu rampok!*')
if (!users[who]) return m.reply('🍡 *Pengguna tidak ditemukan dalam database!*')
if (users[who].level >= users[m.sender].level) return m.reply(`🍥 *Level kamu harus lebih tinggi dari @${who.split('@')[0]} untuk merampok dia!*`, false, { mentions: [who] })
let cooldown = 3600000
let now = new Date * 1
let timePassed = now - users[m.sender].lastrampok
let timeLeft = cooldown - timePassed
if (timePassed < cooldown) return m.reply(`🍘 *Kamu baru saja merampok, tunggu ${clockString(timeLeft)} lagi ya~*`)
let selisihLevel = users[m.sender].level - users[who].level
let persen = Math.min(30, Math.max(5, Math.floor(selisihLevel * 1.5)))
let maxRampok = Math.floor(users[who].money * persen / 100)
let hasil = Math.floor(Math.random() * maxRampok)
if (users[who].money < 10000) return m.reply('🍡 *Target terlalu miskin buat dirampok!*')
if (hasil <= 0) return m.reply(`🍘 *Sayang sekali... kamu tidak mendapatkan apa-apa dari ${conn.getName(who)}.*`)
users[who].money -= hasil
users[m.sender].money += hasil
users[m.sender].lastrampok = now
conn.reply(m.chat, `🍱 *Sukses! Kamu berhasil merampok Rp ${toRupiah(hasil)} dari @${who.split("@")[0]}*`, m, { mentions: [who] })
}

handler.help = ['merampok']
handler.tags = ['rpg']
handler.command = /^(merampok)$/i
handler.register = true
handler.group = true
handler.rpg = true
handler.energy = 30

export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}