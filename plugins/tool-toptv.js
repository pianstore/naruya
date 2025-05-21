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

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted || !/video/.test(m.quoted.mimetype || '')) return m.reply(`🎥 *Reply video dengan perintah ${usedPrefix + command}*`)
await global.loading(m, conn)
try {
let q = await m.quoted.download()
await conn.sendFile(m.chat, q, 'ptv.mp4', '', m, false, { asPTV: true })
} catch (e) {
console.error(e)
m.reply('🚫 *Gagal mengubah video menjadi PTV!*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['toptv']
handler.tags = ['tools']
handler.command = /^toptv$/i
handler.premium = true

export default handler