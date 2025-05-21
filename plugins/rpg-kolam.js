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

let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let total = user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu
let caption = `
🍡 *Kolam Ikan* 🐟

💌 *Nama: ${user.registered ? user.name : conn.getName(m.sender)}*
📊 *Level: ${toRupiah(user.level)}*
✨ *Exp: ${toRupiah(user.exp)}*

────────────────────
🦀 *Kepiting: ${toRupiah(user.kepiting)}*
🦞 *Lobster: ${toRupiah(user.lobster)}*
🦐 *Udang: ${toRupiah(user.udang)}*
🦑 *Cumi: ${toRupiah(user.cumi)}*
🐙 *Gurita: ${toRupiah(user.gurita)}*
🐡 *Buntal: ${toRupiah(user.buntal)}*
🐠 *Dory: ${toRupiah(user.dory)}*
🐳 *Orca: ${toRupiah(user.orca)}*
🐬 *Lumba: ${toRupiah(user.lumba)}*
🐋 *Paus: ${toRupiah(user.paus)}*
🦈 *Hiu: ${toRupiah(user.hiu)}*

🎏 *Total Ikan: ${toRupiah(total)} Ekor*
`.trim()
m.reply(caption)
}

handler.help = ['kolam']
handler.tags = ['rpg']
handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}