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

let handler = async (m, { conn, usedPrefix, command, text }) => {
let user = global.db.data.users
if (user[m.sender].pacar == "") return m.reply(`💔 *Kamu belum punya pacar nih...*\n*Yang sabar ya sayang~ jodoh pasti datang kok~*`)
let date = await dateTime(user[m.sender].pacaranTime)
let pacar = `@${user[m.sender].pacar.split("@")[0]}`
let caption = `
*🌸 𝗣𝗔𝗦𝗔𝗡𝗚𝗔𝗡 𝗞𝗔𝗠𝗨 🌸*
━━━━━━━━━━━━━━━━
💞 *Nama Pasangan: ${pacar}*
📆 *Sejak Jadian: ${date}*
━━━━━━━━━━━━━━━━
💌 *Semoga hubungan kalian langgeng dan selalu manis ya~*
🌷 *Jangan lupa kasih peluk atau cium ke pacarmu tiap hari!* 
`.trim()
conn.adReply(m.chat, caption, '💖 B E R P A C A R A N 💖', 'https://linkbio.co/naruyaizumi', 'https://i.supa.codes/1ge74r', false, m)
}

handler.help = ['pacar']
handler.tags = ['fun']
handler.command = /^(pacar)$/i
handler.register = true
handler.group = true

export default handler

function dateTime(timestamp) {
const dateReg = new Date(timestamp)
const options = { year: 'numeric', month: 'long', day: 'numeric' }
return dateReg.toLocaleDateString('id-ID', options)
}