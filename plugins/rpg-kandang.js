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
let total = user.banteng + user.harimau + user.gajah + user.kambing + user.panda + user.buaya + user.kerbau + user.sapi + user.monyet + user.ayam + user.babi + user.babihutan
let caption = `
🍰 *Kandang Hewan* 🐾

💌 *Nama: ${user.registered ? user.name : conn.getName(m.sender)}*
📊 *Level: ${toRupiah(user.level)}*
✨ *Exp: ${toRupiah(user.exp)}*

────────────────────
🐂 *Banteng: ${toRupiah(user.banteng)}*
🐅 *Harimau: ${toRupiah(user.harimau)}*
🐘 *Gajah: ${toRupiah(user.gajah)}*
🐐 *Kambing: ${toRupiah(user.kambing)}*
🐼 *Panda: ${toRupiah(user.panda)}*
🐊 *Buaya: ${toRupiah(user.buaya)}*
🐃 *Kerbau: ${toRupiah(user.kerbau)}*
🐮 *Sapi: ${toRupiah(user.sapi)}*
🐒 *Monyet: ${toRupiah(user.monyet)}*
🐓 *Ayam: ${toRupiah(user.ayam)}*
🐖 *Babi: ${toRupiah(user.babi)}*
🐗 *Babi Hutan: ${toRupiah(user.babihutan)}*

🐾 *Total Hewan: ${toRupiah(total)} Ekor*
`.trim()

m.reply(caption)
}

handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}