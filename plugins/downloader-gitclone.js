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
try {
if (!text || !/^https:\/\/github\.com\/[\w-]+\/[\w-]+/.test(text)) return m.reply(`📌 *Masukkan URL GitHub yang valid!*\n\n📍 *Contoh: ${usedPrefix + command} https://github.com*`)
await global.loading(m, conn)
let link = text.split("/")
if (link.length < 5) return m.reply("⚠️ *URL GitHub tidak valid!*")
let url = `https://api.github.com/repos/${link[3]}/${link[4]}/zipball`
let name = `${link[4]}.zip`
await conn.sendFile(m.chat, url, name, null, m)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["gitclone"]
handler.tags = ["downloader"]
handler.command = /^gitclone$/i
handler.limit = true
handler.register = true

export default handler