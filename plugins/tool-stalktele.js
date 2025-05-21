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
if (!text) return m.reply(`🍰 *Contoh: ${usedPrefix + command} naruyaizumi*`)
await global.loading(m, conn)
try {
let res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${encodeURIComponent(text)}`)
if (!res.ok) throw '❌ Tidak bisa mengakses data Telegram.'
let json = await res.json()
if (!json.status || !json.data) throw '🙈 Akun tidak ditemukan atau mungkin salah ketik.'
let { title, description, url, image_url } = json.data
let caption = `
🍓 *TELEGRAM STALKER*
🧁 *Nama: ${title}*
🍰 *Bio: ${description || '–'}*
🍬 *Link: ${url}*
`.trim()
await conn.sendMessage(m.chat, {
image: { url: image_url },
caption
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(typeof e === 'string' ? e : '🥀 Terjadi kesalahan saat mengambil data Telegram.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['telestalk']
handler.tags = ['tools']
handler.command = /^(telestalk|stalktele)$/i
handler.register = true
handler.limit = true

export default handler