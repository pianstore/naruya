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
let isPublic = command === "public"
let self = global.opts["self"]

if (self === !isPublic)
return m.reply(
`🌸 *Udah ${!isPublic ? "Self" : "Public"} dari tadi ${m.sender.split("@")[0] === "6283143663697" ? "Cinta" : "Sayang"}*`
)
global.opts["self"] = !isPublic
m.reply(`🌸 *Berhasil ${!isPublic ? "Self" : "Public"} bot!*`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]
handler.command = /^(self|public)$/i
handler.owner = true

export default handler