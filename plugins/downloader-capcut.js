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
if (!text) return m.reply(`✳️ Link CapCut-nya mana sayang?\n\n*Contoh: ${usedPrefix + command} https://www.capcut.com*`)
await global.loading(m, conn)
try {
let res = await fetch(global.API('btz', '/api/download/capcut', { url: text }, 'apikey'))
if (!res.ok) throw 'Gagal menghubungi server.'
let json = await res.json()
if (!json.status) throw '🥀 Gagal mendapatkan data dari CapCut.'
let { title, author, video } = json.result
let caption = `
🎬 *CapCut Downloader*
────────────
📌 *Judul: ${title}*
👤 *Author: ${author.name}*
`.trim()
await conn.sendMessage(m.chat, {
video: { url: video },
caption
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply('🥀 *Gagal memproses video CapCut.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['capcut']
handler.tags = ['downloader']
handler.command = /^(capcut)$/i
handler.register = true
handler.limit = true

export default handler