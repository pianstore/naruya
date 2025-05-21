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

let handler = async (m, { conn, command }) => {
let key = command.toLowerCase()
let toggle = global.opts[key]

if (toggle)
return m.reply(`🌸 *Udah ${key} dari tadi ${m.sender.split("@")[0] === "6283143663697" ? "Cinta" : "Sayang"}*`)
global.opts[key] = true
let other = key === 'gconly' ? 'pconly' : 'gconly'
if (global.opts[other]) global.opts[other] = false
m.reply(`🌸 *Berhasil mengaktifkan mode ${key}!*\n📌 Mode lain (${other}) otomatis dimatikan~`)
}

handler.help = ['gconly', 'pconly']
handler.tags = ['owner']
handler.command = /^(gconly|pconly)$/i
handler.owner = true

export default handler