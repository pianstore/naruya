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

import crypto from 'crypto'

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
5: 40000,
10: 100000,
20: 250000,
50: 1000000,
100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
let users = global.db.data.users
if (text) {
if ('ref_count' in users[m.sender]) return m.reply('Tidak bisa menggunakan kode referal!')
let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
if (!link_creator) return m.reply('Kode referal tidak valid')
let count = users[link_creator].ref_count++
let extra = xp_bonus[count] || 0
users[link_creator].exp += xp_link_creator + extra
users[m.sender].exp += xp_first_time
users[m.sender].ref_count = 0
m.reply(`
Selamat!
+${toRupiah(xp_first_time)} XP
`.trim())
m.reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
} else {
let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
let command_text = `${usedPrefix}ref ${code}`
let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
let share_text = `
Dapatkan ${toRupiah(xp_first_time)} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
m.reply(`
Dapatkan ${toRupiah(xp_link_creator)} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
}
}
handler.help = ['ref']
handler.tags = ['main', 'xp']
handler.command = ['ref']
handler.register = true

export default handler

const toRupiah = number => parseInt(number).toLocaleString().replace(/,/gi, ".")