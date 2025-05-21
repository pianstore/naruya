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
let total = user.pisang + user.anggur + user.mangga + user.jeruk + user.apel
let text = `
🍓 *Gudang Buah Kamu* 🍉

💌 *Nama: ${user.registered ? user.name : conn.getName(m.sender)}*
📊 *Level: ${toRupiah(user.level)}*
✨ *Exp: ${toRupiah(user.exp)}*

────────────────────
*${global.rpg.emoticon("pisang")} Pisang: ${toRupiah(user.pisang)}*
*${global.rpg.emoticon("anggur")} Anggur: ${toRupiah(user.anggur)}*
*${global.rpg.emoticon("mangga")} Mangga: ${toRupiah(user.mangga)}*
*${global.rpg.emoticon("jeruk")} Jeruk: ${toRupiah(user.jeruk)}*
*${global.rpg.emoticon("apel")} Apel: ${toRupiah(user.apel)}*

🍱 *Total Buah: ${toRupiah(total)} Buah*
`.trim()
m.reply(text)
}

handler.help = ['buah']
handler.tags = ['rpg']
handler.command = /^((list)?(buah|fruits?))$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

const toRupiah = number => parseInt(number).toLocaleString().replace(/,/g, ",")