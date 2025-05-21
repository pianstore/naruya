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
let pacar = user[m.sender].pacar

if (user[m.sender].pacar == "") return m.reply("*Kasihan kamu tidak memiliki pacar*")

user[m.sender].pacar = ""
user[pacar].pacar = ""
user[m.sender].pacaranTime = ""
user[pacar].pacaranTime = ""

await m.reply(`*Kamu telah putus dengan @${pacar.split("@")[0]}*`, false, { mentions: [pacar] })
}
handler.help = ["putus"]
handler.tags = ["fun"]
handler.command = /^(putus)$/i
handler.group = true
handler.register = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))